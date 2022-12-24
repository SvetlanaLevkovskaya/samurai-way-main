import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem";

const Dialogs = (props: any) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem id="1" name="Sveta" />
        <DialogItem id="2" name="Viktor" />
        <DialogItem id="3" name="Sasha" />
        <DialogItem id="4" name="Oleg" />
        <DialogItem id="5" name="Dima" />
      </div>
      <div className={styles.messages}>
        <MessageItem message="Hi" />
        <MessageItem message="Hello" />
        <MessageItem message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;