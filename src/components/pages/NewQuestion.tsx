import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import { useNavigate } from 'react-router-dom'

import { saveQuestion } from '../../redux/slices/postsSlice'
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

interface Props {}

export const NewQuestion: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const [optionOneText, setOptionOneText] = useState('')
	const [optionTwoText, setOptionTwoText] = useState('')

	const author: string = useSelector((state: any) => state.users.loggedUser)

	const onFormSubmit = async (e: any) => {
		e.preventDefault()

		await dispatch(
			saveQuestion({ optionOneText, optionTwoText, author })
		).unwrap()
		navigate('/home')
	}
	return (
		<Container>
			<Row className='fs-2 my-5 justify-content-md-center'>
				<div className='fs-2'>Create Your Own Poll</div>
			</Row>
			<Row>
				<div className='fs-4'>Would You Rather...</div>
			</Row>
			<Form className='my-5 justify-content'>
				<Form.Label>First Option</Form.Label>
				<FloatingLabel
					controlId='floatingInput'
					label='Enter the first option'
					className='mb-3'>
					<Form.Control
						type='text'
						placeholder='Enter the first option'
						onChange={(text) => {
							setOptionOneText(text.target.value)
						}}
					/>
				</FloatingLabel>
				<Form.Label>Second Option</Form.Label>
				<FloatingLabel
					controlId='floatingPassword'
					label='Enter the second option'>
					<Form.Control
						type='text'
						placeholder='Enter the second option'
						onChange={(text) => {
							setOptionTwoText(text.target.value)
						}}
					/>
				</FloatingLabel>

				<Row>
					<Button
						className='my-5'
						variant='outline-primary'
						type='submit'
						disabled={
							optionOneText === '' || optionTwoText === '' ? true : false
						}
						onClick={(e) => onFormSubmit(e)}>
						Submit
					</Button>
				</Row>
				<Button
					className='my-5 mx-5'
					variant='outline-secondary'
					type='submit'
					onClick={() => navigate('/home')}>
					back
				</Button>
			</Form>
		</Container>
	)
}
