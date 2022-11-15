import React from 'react'
import { useParams } from 'react-router-dom'
import { getQuestion } from '../../redux/slices/postsSlice'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Figure from 'react-bootstrap/Figure'
import { getAvatar } from '../../redux/slices/usersSlice'

interface Props {}

export const Question: React.FC<Props> = () => {
	const { id } = useParams()
	const question = useSelector((state) => getQuestion(state, id))
	console.log(`Question: ${question}`)

	const avatar: any = getAvatar[question.author]

	return (
		<Container className='my-4'>
			<Row className='fs-2 justify-content-md-center'>{question.author}</Row>

			<Row>
				<Figure>
					<Figure.Image
						width={240}
						height={120}
						alt='login image'
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
						<Button variant='info'>Vote Option One</Button>
					</Card>
				</Col>
				<Col className='fs-4'>
					<Card>
						<p>{question.optionTwo.text}</p>
						<Button variant='secondary'>Vote Option two</Button>
					</Card>
				</Col>
			</Row>
			<Row md='auto' className='my-4 justify-content-md-center'>
				{' '}
				<Button variant='outline-primary'>Back</Button>
			</Row>
		</Container>
	)
}
