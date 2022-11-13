import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import { Pool } from '../index'
import { useSelector } from 'react-redux'

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

interface Props {
	header: string
}

export const Pools: React.FC<Props> = ({ header }) => {
	const questions = useSelector(getQuestions)
	const answeredQuestions: any = useSelector(getAnsweredQuestions)

	return (
		<>
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>{header}</Accordion.Header>
					<Accordion.Body>
						Here we add the Pool Component that has a user, data and a button
						<Row xs={1} md={2} className='justify-content-md-center'>
							{questions.map((pool: any, index) => (
								<Pool pool={pool} key={index}></Pool>
							))}
						</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}
