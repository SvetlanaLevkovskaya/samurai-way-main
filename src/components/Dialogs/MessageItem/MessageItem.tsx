import React from "react";
import styles from "../Dialogs.module.css";
import {MessageItemType} from "../../../redux/state";


const MessageItem = (props: MessageItemType) => {
  return (
      <div className={styles.message}>{props.message}</div>
  );
};

export default MessageItem;