import React, { useEffect, useLayoutEffect } from 'react'
import { Pools } from '../index'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import {
	fetchQuestions,
	getQuestions,
	updateAnsweredQuestions,
	updateUnansweredQuestions,
} from '../../redux/slices/postsSlice'
import {
	getLoggedUser,
	getAnsweredQuestions,
} from '../../redux/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

interface Props {}

export const Home: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()
	const user: any = useSelector(getLoggedUser)

	const questions: any = useSelector(getQuestions)
	console.log('get questions')
	console.log(questions)

	const answeredQuestions: any = useSelector(getAnsweredQuestions)
	console.log('get answeredQuestions')
	console.log(answeredQuestions)

	let unansweredQuestions: any = []

	Object.keys(questions).filter((key: any) => {
		if (!Object.keys(answeredQuestions).includes(key)) {
			unansweredQuestions.push(questions[key])
		}
	})

	console.log('get unansweredQuestions')
	console.log(unansweredQuestions)

	useLayoutEffect(() => {
		dispatch(fetchQuestions())
		dispatch(updateAnsweredQuestions(answeredQuestions))
		dispatch(updateUnansweredQuestions(unansweredQuestions))
	}, [])

	return (
		<>
			<Container className='my-4'>
				<Stack gap={4} direction={'horizontal'}>
					<Pools header={'Answered'}></Pools>
					<Pools header={'Unanswered'}></Pools>
				</Stack>
			</Container>
		</>
	)
}
