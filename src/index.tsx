import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'


export let rerenderEntireTree = () => {

		ReactDOM.render(
			<BrowserRouter>
					{/*					<App state={ store.getState() }
					 addPost={ store.addPost }
					 newPostText={ store._state.profilePage.newPostText }
					 updateNewPostText={ store.updateNewPostText }
					 />*/ }
					<App store={ store } />

			</BrowserRouter>,
			document.getElementById('root'),
		)
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
