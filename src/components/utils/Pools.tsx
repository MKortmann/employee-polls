import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import { Pool } from '../index'

interface Props {
	header: string
	questions: any
}

export const Pools: React.FC<Props> = ({ header, questions }) => {
	return (
		<>
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>{header}</Accordion.Header>
					<Accordion.Body>
						<Row xs={1} md={2} className='justify-content-md-center'>
							{questions.map((pool: any, index: number) => (
								<Pool pool={pool} key={index}></Pool>
							))}
						</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}
