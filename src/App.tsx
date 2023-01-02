import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { StoreType } from './redux/store';

export type AppType = {
		store: StoreType
}

function App(props: AppType) {

		const state = props.store.getState()

		return (
			<div className="app-wrapper">
					<Header />
					<NavBar />

					<div className="app-wrapper-content">
							<Route
								path="/dialogs"
								render={ () => <Dialogs dialogsPage={ state.dialogsPage } /> }
							/>
							<Route
								path="/profile"
								render={ () => <Profile profilePage={ state.profilePage }
																				addPost={ props.store.addPost.bind(props.store) }
																				newPostText={ state.profilePage.newPostText }
																				updateNewPostText={ props.store.updateNewPostText.bind(props.store) }
								/> }
							/>
							<Route path="/news" render={ () => <News /> } />
							<Route path="/musics" render={ () => <Music /> } />
							<Route path="/settings" render={ () => <Settings /> } />
					</div>
			</div>
		)
}

export default App
