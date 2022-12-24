import React from "react";
import styles from "./Post.module.css"
import post from './post.jpg'

export type PostMessageType = {
  message: string
  likeCount: string
}

const Post = (props: PostMessageType) => {
  return (
    <div className={`${styles.item} ${styles.active}`}>
      <img src={post} alt="img"/>{props.message}
      <div><span> {props.likeCount} </span></div>

    </div>
  );
};

export default Post;