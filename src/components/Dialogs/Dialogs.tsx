import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { DialogsPageType } from '../../redux/state'

type PropsType = {
		dialogsPage: DialogsPageType
}

const Dialogs = (props: PropsType) => {
		let dialogItems = props.dialogsPage.dialogs.map(d => {
				return <DialogItem id={ d.id } name={ d.name } />
		})

		let messageItems = props.dialogsPage.messages.map(m => (
			<MessageItem id={ m.id } message={ m.message } />
		))

		let newMessageElement = React.createRef<HTMLTextAreaElement>()

		const addMessage = () => {
				let text = newMessageElement.current!.value // "!" - TypeScript's Non-null assertion operator
				alert(text)
		}

		return (
			<>
					<div className={ styles.dialogs }>
							<div className={ styles.dialogsItems }>{ dialogItems }</div>
							<div className={ styles.messages }>{ messageItems }</div>
					</div>

					<div>
							<div className={ styles.sendForm }>
									<textarea
										className={ styles.textarea }
										ref={ newMessageElement }
										placeholder={ 'Type your message' }
									/>
									<button className={ styles.button } onClick={ addMessage }>
											Send
									</button>
							</div>
					</div>
			</>
		)
}

export default Dialogs
