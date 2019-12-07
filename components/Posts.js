import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./styles";

const Posts = props => (
  <div style={styles.postContainer}>
    {props.posts.map(post => (
      <a href={post.slug} style={styles.postCard}>
        <h2 style={styles.postTitle}>{post.title}</h2>
        <div style={styles.postText}>
          <ReactMarkdown source={post.details} />
        </div>
        <div style={styles.postDate}>{post.date}</div>
      </a>
    ))}
  </div>
);

export default Posts;
