import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

interface Props {}

export const NewQuestion: React.FC<Props> = () => {
	const [firstOption, setFirstOption] = useState('')
	const [secondOption, setSecondOption] = useState('')

	const onFormSubmit = (e: any) => {
		e.preventDefault()
		console.log(firstOption)
		console.log(secondOption)
		debugger
	}
	return (
		<Container>
			<Row className='fs-2 my-5 justify-content-md-center'>
				<div className='fs-2'>Would You Rather...</div>
			</Row>
			<Row>
				<div className='fs-4'>Create Your Own Poll</div>
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
							setFirstOption(text.target.value)
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
							setSecondOption(text.target.value)
						}}
					/>
				</FloatingLabel>

				<Button
					variant='primary'
					type='submit'
					onClick={(e) => onFormSubmit(e)}>
					Submit
				</Button>
			</Form>
		</Container>
	)
}
