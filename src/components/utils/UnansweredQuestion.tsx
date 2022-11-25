import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'

import { SpinnerComponent } from '../index'

import {
	getQuestion,
	saveQuestionAnswer,
	fetchQuestions,
} from '../../redux/slices/postsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, getAvatar } from '../../redux/slices/usersSlice'

import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../redux/store'

interface Props {
	qid: any
}

export const UnansweredQuestion: React.FC<Props> = ({ qid }) => {
	const question = useSelector((state) => getQuestion(state, qid))
	const authedUser = useSelector((state: any) => state.users.loggedUser)
	const [componentStatus, setComponentStatus] = useState('idle')
	const postSliceStatus = useSelector((state: any) => state.users.status)
	const userSliceStatus = useSelector((state: any) => state.users.status)

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const avatar: any = getAvatar[question.author]

	let status: string = 'idle'

	const optionOne = async () => {
		const answer = 'optionOne'

		if (postSliceStatus === 'idle' && userSliceStatus === 'idle') {
			setComponentStatus('loading')
			await updateAndRoute(
				setComponentStatus,
				dispatch,
				authedUser,
				qid,
				answer,
				navigate
			)
		}
	}
	const optionTwo = async () => {
		const answer = 'optionTwo'
		if (postSliceStatus === 'idle' && userSliceStatus === 'idle') {
			await updateAndRoute(
				setComponentStatus,
				dispatch,
				authedUser,
				qid,
				answer,
				navigate
			)
		}
	}

	return (
		<div>
			{componentStatus !== 'loading' ? (
				<>
					<Row className='fs-2 justify-content-md-center'>
						{question.author}
					</Row>

					<Row>
						<Figure>
							<Figure.Image
								width={240}
								height={120}
								alt='question image'
								src={avatar}
							/>
							<Figure.Caption className='fs-5'>
								<div className='fs-2'>Would You Rather...</div>
							</Figure.Caption>
						</Figure>
					</Row>

					<Row>
						<Col className='fs-4'>
							<Card>
								<p>{question.optionOne.text}</p>
								<Button variant='info' onClick={optionOne}>
									Vote Option One
								</Button>
							</Card>
						</Col>
						<Col className='fs-4'>
							<Card>
								<p>{question.optionTwo.text}</p>
								<Button variant='secondary' onClick={optionTwo}>
									Vote Option two
								</Button>
							</Card>
						</Col>
					</Row>
					<Row md='auto' className='my-4 justify-content-md-center'>
						{' '}
						<Button variant='outline-primary' onClick={() => navigate('/home')}>
							Back
						</Button>
					</Row>
				</>
			) : (
				<div>
					<SpinnerComponent />
				</div>
			)}
		</div>
	)
}
async function updateAndRoute(
	setComponentStatus: React.Dispatch<React.SetStateAction<string>>,
	dispatch: any,
	authedUser: any,
	qid: any,
	answer: string,
	navigate: any
) {
	setComponentStatus('loading')
	await dispatch(saveQuestionAnswer({ authedUser, qid, answer })).unwrap()
	await dispatch(fetchUsers()).unwrap()
	await dispatch(fetchQuestions()).unwrap()
	setComponentStatus('idle')
	navigate(`/questions/${qid}`)
}
