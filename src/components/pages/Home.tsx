import React, { useEffect, useState } from 'react'
import { Pools } from '../index'
import Container from 'react-bootstrap/Container'

import { fetchQuestions, getSortQuestions } from '../../redux/slices/postsSlice'
import { fetchUsers, getLoggedUser } from '../../redux/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

import { SpinnerComponent } from '../index'
interface Props {}

export const Home: React.FC<Props> = () => {
	//the default Dispatch type does not know about thunks or other middleware. In order to correctly dispatch thunks, you need to use the specific customized AppDispatch type from the store that includes the thunk middleware types, and use that with useDispatch. Adding a pre-typed hook keeps you from forgetting to import AppDispatch where it's need.
	const dispatch = useDispatch<AppDispatch>()
	const [componentStatus, setComponentStatus] = useState('idle')
	const postSliceStatus = useSelector((state: any) => state.users.status)
	const userSliceStatus = useSelector((state: any) => state.users.status)

	const questions: any = useSelector(getSortQuestions)
	const user: any = useSelector(getLoggedUser)
	let answeredQIds: any = []
	let unansweredQuestions: any = []
	let answeredQuestions: any = []

	if (user.length !== 0) {
		answeredQIds = user[0][1]['answers']

		for (let i = 0; i < questions.flat(1).length - 1; i = i + 2) {
			answeredQIds[questions.flat(1)[i]]
				? answeredQuestions.push(questions[i / 2])
				: unansweredQuestions.push(questions[i / 2])
		}
	}

	useEffect(() => {
		;(async () => {
			try {
				// unwrap() makes the await to wait the request success or failure at the component level
				setComponentStatus('loading')
				await dispatch(fetchUsers()).unwrap()
				await dispatch(fetchQuestions()).unwrap()
				setComponentStatus('idle')
			} catch (err) {
				console.log('No possible to fetch questions and/or users')
			}
		})()
	}, [])

	return (
		<Container className='my-4'>
			{componentStatus === 'idle' ? (
				<>
					<Pools header={'Unanswered'} questions={unansweredQuestions}></Pools>
					<Pools header={'Answered'} questions={answeredQuestions}></Pools>
				</>
			) : (
				<SpinnerComponent />
			)}
		</Container>
	)
}
