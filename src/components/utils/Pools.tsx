import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import { Pool } from '../index'

interface Props {
	header: string
}

export const Pools: React.FC<Props> = ({ header }) => {
	return (
		<>
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>{header}</Accordion.Header>
					<Accordion.Body>
						Here we add the Pool Component that has a user, data and a button
						<Row xs={1} md={2} className='justify-content-md-center'>
							<Pool></Pool>
							<Pool></Pool>
							<Pool></Pool>
							<Pool></Pool>
						</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}
