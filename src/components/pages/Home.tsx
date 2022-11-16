import React, { useEffect } from 'react'
import { Pools } from '../index'
import Container from 'react-bootstrap/Container'

import { fetchQuestions, getSortQuestions } from '../../redux/slices/postsSlice'
import { fetchUsers, getLoggedUser } from '../../redux/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

import { useNavigate } from 'react-router-dom'

interface Props {}

export const Home: React.FC<Props> = () => {
	//the default Dispatch type does not know about thunks or other middleware. In order to correctly dispatch thunks, you need to use the specific customized AppDispatch type from the store that includes the thunk middleware types, and use that with useDispatch. Adding a pre-typed hook keeps you from forgetting to import AppDispatch where it's need.
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

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
		if (user.length === 0) {
			navigate('/')
		}
		;(async () => {
			try {
				// unwrap() makes the await to wait the request success or failure at the component level
				await dispatch(fetchUsers()).unwrap()
				await dispatch(fetchQuestions()).unwrap()
			} catch (err) {
				console.log('No possible to fetch questions and/or users')
			}
		})()
	}, [])

	return (
		<>
			<Container className='my-4'>
				<Pools header={'Unanswered'} questions={unansweredQuestions}></Pools>
				<Pools header={'Answered'} questions={answeredQuestions}></Pools>
			</Container>
		</>
	)
}
