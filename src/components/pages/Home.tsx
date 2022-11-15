import React, { useEffect } from 'react'
import { Pools } from '../index'
import Container from 'react-bootstrap/Container'

import {
	fetchQuestions,
	getSortQuestions,
	updateAnsweredQuestions,
} from '../../redux/slices/postsSlice'
import { getLoggedUser } from '../../redux/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

interface Props {}

export const Home: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()

	const questions: any = useSelector(getSortQuestions)
	const user: any = useSelector(getLoggedUser)
	const answeredQIds: any = user[0][1]['answers']

	let unansweredQuestions: any = []
	let answeredQuestions: any = []

	for (let i = 0; i < questions.flat(1).length - 1; i = i + 2) {
		if (answeredQIds[questions.flat(1)[i]]) {
			answeredQuestions.push(questions[i / 2])
		} else {
			unansweredQuestions.push(questions[i / 2])
		}
	}

	useEffect(() => {
		dispatch(fetchQuestions())
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
