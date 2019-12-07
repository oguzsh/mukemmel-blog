import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

// Components
import Header from "../components/Header";
import Posts from "../components/Posts";
import styles from "../components/styles";

const Home = ({ posts }) => (
  <div style={styles.containerStyle}>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Posts posts={posts} />

    <style jsx>
      {`
        @import url("https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap");
      `}
    </style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
