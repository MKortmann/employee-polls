import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getUsers } from '../../API/_DATA'

const initialState: any = {
	users: {},
	status: 'idle',
	value: 0,
}

export const fetchUsers = createAsyncThunk('', async () => {
	const response = await _getUsers()
	console.log(response)
	return response
})

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = 'loading'
				console.log('loading')
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'idle'
				console.log(action.payload)
				state.users = action.payload
			})
	},
})

export const { increment } = usersSlice.actions

export default usersSlice.reducer

export const getUsers = (state: any) => state.users
