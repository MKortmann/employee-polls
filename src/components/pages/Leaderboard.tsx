import React from 'react'

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

interface Props {}

export const Leaderboard: React.FC<Props> = () => {
	return (
		<Container>
			<Table striped bordered hover className='my-5'>
				<thead>
					<tr>
						<th>#</th>
						<th>Users</th>
						<th>Answered</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan={2}>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	)
}
