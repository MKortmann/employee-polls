import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import ProgressBar from 'react-bootstrap/ProgressBar'

import { getQuestion } from '../../redux/slices/postsSlice'
import { useSelector } from 'react-redux'
import { getAvatar } from '../../redux/slices/usersSlice'

import { useNavigate } from 'react-router-dom'

interface Props {
	qid: any
}

export const AnsweredQuestion: React.FC<Props> = ({ qid }) => {
	const question = useSelector((state) => getQuestion(state, qid))
	const navigate = useNavigate()
	const avatar: any = getAvatar[question.author]

	return (
		<div>
			<Row>
				<Figure>
					<Figure.Image
						width={240}
						height={120}
						alt='question image'
						src={avatar}
					/>
					<Figure.Caption className='fs-5'>
						<div className='fs-2'>Votes</div>
					</Figure.Caption>
				</Figure>
			</Row>

			<Row>
				<Col className='fs-4'>
					<Card>
						<p>{question.optionOne.text}</p>
						<ProgressBar variant='info' now={60} label={`${60}%`} />
					</Card>
				</Col>
				<Col className='fs-4'>
					<Card>
						<p>{question.optionTwo.text}</p>
						<ProgressBar variant='secondary' now={40} label={`${40}%`} />
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
