import React from 'react'
import Card from 'react-bootstrap/Card'
import { cx, css } from '@emotion/css'
import Button from 'react-bootstrap/Button'

interface Props {
	pool: any
}

export const Pool: React.FC<Props> = ({ pool }) => {
	const style = bookStyles()
	debugger
	return (
		<Card className={cx(style.card)}>
			{/* <Card.Img variant='top' src={img} className={cx(style.cardImg)} /> */}
			<Card.Body>
				<Card.Title>{pool[1].author}</Card.Title>
				<Card.Text>{pool[1].timestamp}</Card.Text>
				<h5>{pool[1].optionOne.text}</h5>
				<div>
					<Button variant='primary'>Show</Button>{' '}
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
