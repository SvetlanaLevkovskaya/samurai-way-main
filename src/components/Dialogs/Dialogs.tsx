import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsPageType} from "./../../redux/state";

const Dialogs = (props: DialogsPageType) => {

/*
  let dialogsData = [
    {id: "1", name: "Sveta"},
    {id: "2", name: "Viktor"},
    {id: "3", name: "Sasha"},
    {id: "4", name: "Oleg"},
    {id: "5", name: "Dima"},
  ];
*/

  let dialogItems = props.dialogs.map(d => {
    return (
      <DialogItem id={d.id} name={d.name} />
    )
  })

/*
  let messageData = [
    {id: "1", message: "Hi"},
    {id: "2", message: "Hello"},
    {id: "3", message: "How are you?"},
    {id: "4", message: "Yo"},
    {id: "5", message: "Yo"},
  ];
*/

  let messageItems = props.messages
    .map(m => <MessageItem id={m.id} message={m.message} />)

  return (
    <div className={styles.dialogs}>

      <div className={styles.dialogsItems}>

        {dialogItems}

      </div>
      <div className={styles.messages}>

        {messageItems}

      </div>
    </div>
  );
};

export default Dialogs;