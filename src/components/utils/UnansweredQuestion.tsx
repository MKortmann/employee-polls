import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'

import { getQuestion, saveQuestionAnswer } from '../../redux/slices/postsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getAvatar } from '../../redux/slices/usersSlice'

import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../redux/store'

interface Props {
	qid: any
}

export const UnansweredQuestion: React.FC<Props> = ({ qid }) => {
	const question = useSelector((state) => getQuestion(state, qid))
	const authedUser = useSelector((state: any) => state.users.loggedUser)

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const avatar: any = getAvatar[question.author]

	const optionOne = async () => {
		const answer = 'optionOne'
		await dispatch(saveQuestionAnswer({ authedUser, qid, answer })).unwrap()
		navigate('/home')
	}
	const optionTwo = async () => {
		const answer = 'optionTwo'
		await dispatch(saveQuestionAnswer({ authedUser, qid, answer })).unwrap()
		navigate('/home')
	}

	return (
		<div>
			<Row className='fs-2 justify-content-md-center'>{question.author}</Row>

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
		</div>
	)
}
