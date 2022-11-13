import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { _getQuestions } from '../../API/_DATA'

const initialState: any = {
	questions: {},
	answeredQuestions: [],
	unansweredQuestions: [],
	status: 'idle',
}

export const fetchQuestions = createAsyncThunk('/fetch/questions', async () => {
	const response = await _getQuestions()
	return response
})

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		updateAnsweredQuestions(state, action) {
			//to print the state use current
			console.log(current(state))
			console.log(action.payload)
			state.answeredQuestions = action.payload
		},
		updateUnansweredQuestions: (state, action) => {
			state.unansweredQuestions = action.payload
		},
	},
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

export const { updateAnsweredQuestions, updateUnansweredQuestions } =
	postsSlice.actions

export default postsSlice.reducer

export const getPostsStatus = (state: any) => state.posts.status

export const getQuestions = (state: any) =>
	Object.entries(state.posts.questions)
