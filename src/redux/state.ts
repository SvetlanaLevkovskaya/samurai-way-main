export type PostType = {
	id: string
	message: string
	likeCount: number
}

export type DialogType = {
	id: string
	name: string
}

export type MessageType = {
	id: string
	message: string
}

export type FriendType = {
	id: string
	name: string
}

export type ProfilePageType = {
	posts: PostType[]
}

export type DialogsPageType = {
	dialogs: DialogType[]
	messages: MessageType[]
}

export type SideBarPageType = {
	friends: FriendType[]
}

export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sideBarPage: SideBarPageType
}

export type AppType = {
	state: StateType
}

let state = {
	profilePage: {
		posts: [
			{ id: '1', message: 'Hi, how are you?', likeCount: 15 },
			{ id: '2', message: 'Hi!', likeCount: 11 },
			{ id: '3', message: 'Hi, how are you?', likeCount: 0 }
		]
	},

	dialogsPage: {
		dialogs: [
			{ id: '1', name: 'Sveta' },
			{ id: '2', name: 'Viktor' },
			{ id: '3', name: 'Vadim' },
			{ id: '4', name: 'Andrey' },
			{ id: '5', name: 'Gleb' },
			{ id: '6', name: 'Sasha' }
		],
		messages: [
			{ id: '1', message: 'Hello  😀' },
			{ id: '2', message: 'Hi 🥳' },
			{ id: '3', message: 'How are you? 🧑‍🚀' },
			{ id: '4', message: 'Yo 🤩' },
			{ id: '5', message: 'Sound great! 😉' },
			{ id: '6', message: "That's right! 💯" }
		]
	},

	sideBarPage: {
		friends: [
			{ id: '1', name: 'Viktor' },
			{ id: '2', name: 'Sasha' },
			{ id: '3', name: 'Andrey' }
		]
	}
}

export default state
