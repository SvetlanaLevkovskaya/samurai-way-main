import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { DialogsPageType } from "../../redux/state"

type PropsType = {
	dialogsPage: DialogsPageType
}

const Dialogs = (props: PropsType) => {
	let dialogItems = props.dialogsPage.dialogs.map(d => {
		return <DialogItem id={d.id} name={d.name} />
	})

	let messageItems = props.dialogsPage.messages.map(m => (
		<MessageItem id={m.id} message={m.message} />
	))

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>{dialogItems}</div>
			<div className={styles.messages}>{messageItems}</div>
		</div>
	)
}

export default Dialogs
