import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state, { addPost, StateType, subscribe, updateNewPostText } from './redux/state'
import { BrowserRouter } from 'react-router-dom'


export let rerenderEntireTree = () => {

		ReactDOM.render(
			<BrowserRouter>
					<App state={ state }
							 addPost={ addPost }
							 newPostText={ state.profilePage.newPostText }
							 updateNewPostText={ updateNewPostText }
					/>
			</BrowserRouter>,
			document.getElementById('root'),
		)
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
