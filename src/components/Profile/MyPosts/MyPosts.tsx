import React from "react";
import Post from "./Post/Post";
import styles from "./Post/Post.module.css";

const MyPosts = (props: any) => {
  return (
    <div className={styles.postsBlock}>
      My posts

      <div>
        <div><textarea></textarea> </div>
        <div><button> Add post</button></div>

      </div>

      <div>
        <div className={styles.posts}>
          <Post message='Hi, how are you?' likeCount="like 15"/>
          <Post message='Hi!'  likeCount="like 8"/>
          <Post message='Hello!!!' likeCount="like 5"/>
        </div>
      </div>

    </div>
  );
};

export default MyPosts;