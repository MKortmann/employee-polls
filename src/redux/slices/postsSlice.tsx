import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	_getQuestions,
	_saveQuestionAnswer,
	_saveQuestion,
} from '../../API/_DATA'

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

export const saveQuestion = createAsyncThunk(
	'/add/question',
	async ({
		optionOneText,
		optionTwoText,
		author,
	}: {
		optionOneText: string
		optionTwoText: string
		author: string
	}) => {
		const response = await _saveQuestion({
			optionOneText,
			optionTwoText,
			author,
		})
		return response
	}
)

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setStatus(state, action) {
			state.chainStatus = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchQuestions.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				state.status = 'idle'
				state.questions = action.payload
			})
			.addCase(saveQuestionAnswer.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(saveQuestionAnswer.fulfilled, (state) => {
				state.status = 'idle'
			})
			.addCase(saveQuestion.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(saveQuestion.fulfilled, (state) => {
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
