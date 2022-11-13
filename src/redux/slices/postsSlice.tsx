import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { _getQuestions } from '../../API/_DATA'

const initialState: any = {
	questions: {},
	status: 'idle',
}

export const fetchQuestions = createAsyncThunk('/fetch/questions', async () => {
	const response = await _getQuestions()
	return response
})

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchQuestions.pending, (state) => {
				console.log('loading')
				state.status = 'loading'
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				console.log('idle')
				state.status = 'idle'
				state.questions = action.payload
			})
	},
})

// export const { syncAction } = postsSlice.actions

export default postsSlice.reducer

export const getPostsStatus = (state: any) => state.posts.status

export const getQuestions = (state: any) =>
	Object.entries(state.posts.questions)
