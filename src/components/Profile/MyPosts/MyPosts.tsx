import React from 'react'
import Post from './Post/Post'
import styles from './MyPosts.module.css'
import { PostType } from '../../../redux/state'

type PropsType = {
	posts: PostType[]
}

const MyPosts = (props: PropsType) => {
	let postElements = props.posts.map(p => (
		<Post id={p.id} message={p.message} likeCount={p.likeCount} />
	))

	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button onClick={() => {}}> Add post</button>
				</div>
			</div>
			<div>
				<div className={styles.posts}>{postElements}</div>
			</div>
		</div>
	)
}

export default MyPosts
