import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { _getQuestions, _saveQuestionAnswer } from '../../API/_DATA'

const initialState: any = {
	questions: {},
	status: 'idle',
}

export const fetchQuestions = createAsyncThunk('/fetch/questions', async () => {
	const response = await _getQuestions()
	return response
})

export const saveQuestionAnswer = createAsyncThunk(
	'/save/questionAnswer',
	async ({
		authedUser,
		qid,
		answer,
	}: {
		authedUser: any
		qid: any
		answer: any
	}) => {
		const response = await _saveQuestionAnswer({ authedUser, qid, answer })
		return response
	}
)

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setStatus(state, action) {
			//to print the state use current
			console.log('updateState')
			console.log(action.payload)
			state.chainStatus = action.payload
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
			.addCase(saveQuestionAnswer.pending, (state) => {
				console.log('pending')
				state.status = 'loading'
			})
			.addCase(saveQuestionAnswer.fulfilled, (state) => {
				console.log('finished')
				state.status = 'idle'
			})
	},
})

export const { setStatus } = postsSlice.actions

export default postsSlice.reducer

export const getPostsStatus = (state: any) => state.posts.status

export const getSortQuestions = (state: any) => {
	const tmp = Object.entries(state.posts.questions)
	return tmp.sort((a: any, b: any) => a[1].timestamp - b[1].timestamp).reverse()
}

export const getQuestion = (state: any, id: any) => {
	return state.posts.questions[id]
}
