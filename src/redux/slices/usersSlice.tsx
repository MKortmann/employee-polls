import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getUsers } from '../../API/_DATA'
import { Users } from '../../types/users'

interface State {
	users: Users
	status: string
}

const initialState: any = {
	users: {},
	status: 'idle',
}

export const fetchUsers = createAsyncThunk('', async () => {
	const response = await _getUsers()
	console.log(response)
	return response
})

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = 'loading'
				console.log('loading')
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'idle'
				console.log('idle')
				console.log(action.payload)
				state.users = action.payload
			})
	},
})

// export const { increment } = usersSlice.actions

export default usersSlice.reducer

export const getUsers = (state: any) => state.users
