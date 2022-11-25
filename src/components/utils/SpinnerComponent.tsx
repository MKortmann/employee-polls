import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

interface Props {}

export const SpinnerComponent: React.FC<Props> = () => {
	return (
		<div>
			<h1 className='fs-1'>Loading</h1>
			<Spinner animation='grow' variant='primary' />
			<Spinner animation='grow' variant='secondary' />
			<Spinner animation='grow' variant='success' />
			<Spinner animation='grow' variant='danger' />
			<Spinner animation='grow' variant='warning' />
			<Spinner animation='grow' variant='info' />
			<Spinner animation='grow' variant='dark' />
		</div>
	)
}
