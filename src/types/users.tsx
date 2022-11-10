export interface User {
	id: string
	password: string
	name: string
	avatarUrl: string
	answers: {}
	questions: Array<string>
}

export interface Users {
	[name: string]: User
}
