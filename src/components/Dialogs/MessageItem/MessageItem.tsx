import React from 'react'
import styles from '../Dialogs.module.css'
import { MessageType } from '../../../redux/store'

const MessageItem = ({ id, message }: MessageType) => {
		return <div className={ styles.message }>{ message }</div>
}

export default MessageItem
