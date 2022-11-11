import React, { useEffect } from 'react'
import { Pools } from '../index'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import { fetchQuestions, getPostsStatus } from '../../redux/slices/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

interface Props {}

export const Home: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchQuestions())
	})

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
