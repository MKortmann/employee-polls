import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../redux/slices/usersSlice'
import postsReducer from '../redux/slices/postsSlice'

export const store = configureStore({
	reducer: {
		users: usersReducer,
		posts: postsReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
