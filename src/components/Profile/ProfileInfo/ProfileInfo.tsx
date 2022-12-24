import React from "react";
import content from "../content.jpg";
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props: any) => {
  return (
    <div>
      <div className={styles.content}><img  src={content} alt="img" /></div>
      <div>avatar + desc</div>
    </div>
  );
};

export default ProfileInfo;