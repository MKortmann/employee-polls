import React from 'react'

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import { getUsers, getAvatar } from '../../redux/slices/usersSlice'
import { useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'

import { useNavigate } from 'react-router-dom'

interface Props {}

export const Leaderboard: React.FC<Props> = () => {
	const navigate = useNavigate()
	const users = useSelector(getUsers)

	const sortUsers = Object.entries(users)
		.sort((u1: any, u2: any) => {
			return (
				Object.keys(u1[1].answers).length +
				u1[1].questions.length -
				(Object.keys(u2[1].answers).length + u2[1].questions.length)
			)
		})
		.reverse()

	return (
		<Container>
			<Table striped bordered hover className='my-5'>
				<thead>
					<tr>
						<th>#</th>
						<th>Avatar</th>
						<th>Users</th>
						<th>Answered</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody>
					{sortUsers.map((user: any, index) => (
						<tr>
							<td>{index}</td>
							<td>
								<Figure>
									<Figure.Image
										width={36}
										height={24}
										alt='vatar'
										src={getAvatar[user[0]]}
									/>
								</Figure>
							</td>
							<td>{user[1].name}</td>
							<td>{Object.keys(user[1]?.answers)?.length}</td>
							<td>{user[1]?.questions.length}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Row md='auto' className='my-4 justify-content-md-center'>
				{' '}
				<Button variant='outline-primary' onClick={() => navigate('/home')}>
					Back
				</Button>
			</Row>
		</Container>
	)
}
