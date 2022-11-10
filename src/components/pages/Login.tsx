import React, { useEffect } from 'react'
import Figure from 'react-bootstrap/Figure'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import loginImage from '../../img/login.jpg'
import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers, getUsers } from '../../redux/slices/usersSlice'
import type { AppDispatch } from '../../redux/store'
import { User, Users } from '../../types/users'

interface Props {}

export const Login: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()

	//@ts-ignore
	const users = useSelector((state: any) => state.users.users)
	const status = useSelector((state: any) => state.users.status)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUsers())
		}
	}, [])

	const usersOptions = Object.entries(users).map((user: any) => (
		<Dropdown.Item key={user[1].id} onClick={() => console.log(user[1].id)}>
			{user[0]}
		</Dropdown.Item>
	))

	return (
		<>
			<h1
				className={css`
					font-size: 80px;
					margin: 60px 0 60px 0;
				`}>
				Welcome to Employee Polls
			</h1>
			<Figure>
				<Figure.Image
					width={640}
					height={640}
					alt='login image'
					src={loginImage}
				/>
				<Figure.Caption>
					<p className='fs-1'>Select an user to log in</p>
				</Figure.Caption>
			</Figure>

			{
				<DropdownButton
					title={'Select an user'}
					className={css`
						font-size: 40px;
					`}>
					{usersOptions}
				</DropdownButton>
			}
		</>
	)
}
