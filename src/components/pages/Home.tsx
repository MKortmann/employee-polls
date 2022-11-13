import React, { useEffect } from 'react'
import { Pools } from '../index'
import Container from 'react-bootstrap/Container'

import { fetchQuestions, getQuestions } from '../../redux/slices/postsSlice'
import { getAnsweredQuestions } from '../../redux/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

interface Props {}

export const Home: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()

	const questions: any = useSelector(getQuestions)
	let answeredQIds: any = useSelector(getAnsweredQuestions)
	let unansweredQuestions: any = []
	let answeredQuestions: any = []

	Object.keys(questions).filter((key: any) => {
		if (!Object.keys(answeredQIds).includes(key)) {
			unansweredQuestions.push(questions[key])
		}
	})

	Object.keys(questions).filter((key: any) => {
		if (Object.keys(answeredQIds).includes(key)) {
			answeredQuestions.push(questions[key])
		}
	})

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
