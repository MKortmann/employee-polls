import React from 'react'
import { Pools } from '../index'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

interface Props {}

export const Home: React.FC<Props> = () => {
	return (
		<>
			<Container className='my-4'>
				<Stack gap={4} direction={'horizontal'}>
					<Pools header={'Answered'}></Pools>
					<Pools header={'Unanswered'}></Pools>
				</Stack>
			</Container>
		</>
	)
}
