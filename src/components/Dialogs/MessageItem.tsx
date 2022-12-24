import React from "react";
import styles from "./Dialogs.module.css";

export type MessageItemType = {
  message: string
}

const MessageItem = (props: MessageItemType) => {
  return (
      <div className={styles.message}>{props.message}</div>
  );
};

export default MessageItem;