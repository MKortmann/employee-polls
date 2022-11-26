import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { css } from '@emotion/css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import { useNavigate } from 'react-router-dom'
export const NotFound = () => {
	const navigate = useNavigate()

	return (
		<Container
			className={css`
				margin-top: 25px;
				margin-bottom: 50px;
			`}>
			<Alert variant={'warning'}>Page not found!</Alert>
			<Row md='auto' className='my-4 justify-content-md-center'>
				{' '}
				<Button variant='outline-primary' onClick={() => navigate('/')}>
					Click to LogIn
				</Button>
			</Row>
		</Container>
	)
}
