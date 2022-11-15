import React from 'react'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import { AnsweredQuestion, UnansweredQuestion } from '../index'
import { useSelector } from 'react-redux'
import { getAnsweredQuestions } from '../../redux/slices/usersSlice'

interface Props {}

export const Question: React.FC<Props> = () => {
	const { id } = useParams()

	const isAnswered = useSelector(getAnsweredQuestions).filter((q: any) => {
		return q[0] === id
	})

	return (
		<Container className='my-4'>
			{isAnswered.length !== 0 ? (
				<AnsweredQuestion id={id}></AnsweredQuestion>
			) : (
				<UnansweredQuestion id={id}></UnansweredQuestion>
			)}
		</Container>
	)
}
