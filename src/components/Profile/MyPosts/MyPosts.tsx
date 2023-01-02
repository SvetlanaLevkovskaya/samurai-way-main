import React, { ChangeEvent } from 'react'
import Post from './Post/Post'
import styles from './MyPosts.module.css'
import { PostType } from '../../../redux/state'

type PropsType = {
		posts: PostType[]
		addPost: (text: string) => void
		newPostText: string
		updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PropsType ) => {
		let postElements = props.posts.map(p => (
			<Post key={ p.id } id={ p.id } message={ p.message } likeCount={ p.likeCount } />
		))

		// с помощью ref мы стучимся напрямую к DOM элементу, а нам нужен virtual DOM
		//let newPostElement = React.createRef<HTMLTextAreaElement>()

		const addPost = () => {
				//let text = newPostElement.current!.value
				/*	let text = newPostElement.current ? newPostElement.current.value : " "*/
				props.addPost(props.newPostText)
				//newPostElement.current!.value = ''

		}

		const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
				/*props.updateNewPostText(newPostElement.current!.value)*/  // let newPostElement = React.createRef<HTMLTextAreaElement>()

				props.updateNewPostText(e.currentTarget.value)

		}

		return (
			<div className={ styles.postsBlock }>
					<h3>My posts</h3>
					<div>
							<div>
									{/*<textarea ref={ newPostElement } value={ props.newPostText } onChange={ onPostChange } />*/}
									<textarea value={ props.newPostText } onChange={ onPostChange } />
							</div>
							<div>
									<button onClick={ addPost }> Add post</button>
							</div>
					</div>
					<div>
							<div className={ styles.posts }>{ postElements }</div>
					</div>
			</div>
		)
}


export default MyPosts
