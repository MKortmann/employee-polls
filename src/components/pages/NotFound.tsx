import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { css } from '@emotion/css'

export const NotFound = () => {
	return (
		<Container
			className={css`
				margin-top: 25px;
				margin-bottom: 50px;
			`}>
			<Alert variant={'warning'}>Page not found!</Alert>
		</Container>
	)
}
