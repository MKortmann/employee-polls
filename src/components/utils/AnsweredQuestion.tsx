import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import ProgressBar from 'react-bootstrap/ProgressBar'

import { getQuestion } from '../../redux/slices/postsSlice'
import { useSelector } from 'react-redux'
import { getAvatar, getLoggedUser } from '../../redux/slices/usersSlice'

import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/css'

interface Props {
	qid: any
}

export const AnsweredQuestion: React.FC<Props> = ({ qid }) => {
	const question = useSelector((state) => getQuestion(state, qid))
	const user: any = useSelector(getLoggedUser)

	const totalVotes =
		question.optionOne.votes.length + question.optionTwo.votes.length
	const porcentageAnsOptionOne =
		(question.optionOne.votes.length / totalVotes) * 100
	const porcentageAnsOptionTwo =
		(question.optionTwo.votes.length / totalVotes) * 100

	const navigate = useNavigate()
	const avatar: any = getAvatar[question.author]

	const avatarUser = (
		<Figure>
			<Figure.Image
				width={46}
				height={46}
				alt='user avatar'
				src={getAvatar[user[0][1].id]}
			/>
		</Figure>
	)

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
						<div className='fs-2'>Total Number of Votes: {totalVotes}</div>
						<div>Author: {question.author}</div>
					</Figure.Caption>
				</Figure>
			</Row>

			<Row>
				<div className='fs-2'>Would You Rather...</div>
				<Col className='fs-4'>
					<Card className='h-100 align-text-bottom align-bottom'>
						<p>{question.optionOne.text}</p>
						{user[0][1]?.answers[qid] === 'optionOne' ? (
							avatarUser
						) : (
							<div
								className={css`
									margin-top: 72px;
								`}></div>
						)}
						<p>Votes: {question.optionOne.votes.length}</p>
						<ProgressBar
							className={css`
								height: 40px;
								font-size: 20px;
							`}
							variant='info'
							now={porcentageAnsOptionOne}
							label={`${porcentageAnsOptionOne}%`}
						/>
					</Card>
				</Col>
				<Col className='fs-4'>
					<Card className='h-100 '>
						<p>{question.optionTwo.text}</p>
						{user[0][1]?.answers[qid] === 'optionTwo' ? (
							avatarUser
						) : (
							<div
								className={css`
									margin-top: 72px;
								`}></div>
						)}
						<p>Votes: {question.optionTwo.votes.length}</p>
						<ProgressBar
							className={css`
								height: 40px;
								font-size: 20px;
							`}
							variant='secondary'
							now={porcentageAnsOptionTwo}
							label={`${porcentageAnsOptionTwo}%`}
						/>
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
