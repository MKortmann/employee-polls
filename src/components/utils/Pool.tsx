import React from 'react'
import Card from 'react-bootstrap/Card'
import { cx, css } from '@emotion/css'
import Button from 'react-bootstrap/Button'
import { getAvatar } from '../../redux/slices/usersSlice'
import { formatISO, formatDistanceToNow } from 'date-fns'

interface Props {
	pool: any
}

export const Pool: React.FC<Props> = ({ pool }) => {
	const style = bookStyles()
	const avatar: any = getAvatar[pool[1].author]
	const date = `
	${formatISO(pool[1].timestamp, { representation: 'time' }).slice(0, 8)} -
	${formatISO(pool[1].timestamp, { representation: 'date' })}
	`

	return (
		<Card className={cx(style.card)}>
			<Card.Img variant='top' src={avatar} className={cx(style.cardImg)} />
			<Card.Body>
				<Card.Title>{pool[1].author}</Card.Title>
				<Card.Text>{date}</Card.Text>
				<h5
					className={css`
						opacity: 0.5;
					`}>
					{pool[1].optionOne.text.slice(0, 16)}...
				</h5>
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
