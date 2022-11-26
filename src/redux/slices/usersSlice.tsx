import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getUsers } from '../../API/_DATA'

import avatarSarahedo from '../../avatars/sarahedo.svg'
import avatarTyler from '../../avatars/tylermcginnis.svg'
import avatarMtsamis from '../../avatars/mtsamis.svg'
import avatarZoshikanlu from '../../avatars/zoshikanlu.svg'

const initialState: any = {
	users: {},
	loggedUser: '',
	status: 'idle',
}

export const fetchUsers = createAsyncThunk('/fetch/users', async () => {
	const response = await _getUsers()
	return response
})

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		updateLogUser(state, action) {
			state.loggedUser = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'idle'
				state.users = action.payload
			})
	},
})

export const { updateLogUser } = usersSlice.actions

export default usersSlice.reducer

export const getUsers = (state: any) => state.users.users
export const getUserStatus = (state: any) => state.users.status

export const getLoggedUser = (state: any) =>
	Object.entries(state.users.users)
		.filter((user: any) => {
			return user[1].id === state.users.loggedUser
		})
		.map((user) => user)

export const getAvatarComponent = (state: any) =>
	Object.entries(state.users.users)
		.filter((user: any) => {
			return user[1].id === state.users.loggedUser
		})
		.map((user: any) => getAvatar[user[1].id])

export const getAvatar: Record<any, any> = {
	sarahedo: avatarSarahedo,
	tylermcginnis: avatarTyler,
	mtsamis: avatarMtsamis,
	zoshikanlu: avatarZoshikanlu,
}

export const getAnsweredQuestions = (state: any) => {
	return Object.entries(state.users.users[state.users.loggedUser].answers)
}
