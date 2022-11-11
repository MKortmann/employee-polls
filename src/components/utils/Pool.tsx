import React from 'react'
import Card from 'react-bootstrap/Card'
import { cx, css } from '@emotion/css'
import Button from 'react-bootstrap/Button'

interface Props {}

export const Pool: React.FC<Props> = ({}) => {
	const style = bookStyles()
	return (
		<Card className={cx(style.card)}>
			{/* <Card.Img variant='top' src={img} className={cx(style.cardImg)} /> */}
			<Card.Body>
				<Card.Title>Title Here</Card.Title>
				<Card.Text>Author Here</Card.Text>
				<div>
					<Button variant='primary'>Primary</Button>{' '}
				</div>
			</Card.Body>
		</Card>
	)
}

export const bookStyles = () => {
	return {
		card: css`
			width: 16rem;
			margin: 10px;
			margin-button: 0;
		`,
		cardImg: css`
			width: 50%;
			height: 7vw;
			margin: auto;
		`,
	}
}
