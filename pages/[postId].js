import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// Components
import Layout from "../components/Layout";

const BlogPost = ({ post }) => (
  <>
    <Head>
      <title>{post.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="blog">
        <div className="blog-date">{post.date}</div>
        <h2 className="blog-title">{post.title}</h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
      </div>
    </Layout>
  </>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(
    `https://oguzshblog.herokuapp.com/api/post/${query.postId}`
  );
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
