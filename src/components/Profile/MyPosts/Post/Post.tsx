import React from "react";
import styles from "./Post.module.css"
import post from "./post.jpg"
import {PostType} from "../../../../redux/state";

const Post = ({id, message, likeCount}: PostType) => {

  return (
    <div className={`${styles.item} ${styles.active}`}>

      <img src={post} alt="img" />{message}
      <div><span> like {likeCount} </span></div>

    </div>
  );
};

export default Post;