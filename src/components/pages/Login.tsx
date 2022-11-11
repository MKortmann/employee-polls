import React, { useEffect } from 'react'
import Figure from 'react-bootstrap/Figure'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import loginImage from '../../img/login.jpg'
import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'

import {
	fetchUsers,
	updateLogUser,
	getUserStatus,
	getUsers,
} from '../../redux/slices/usersSlice'

import type { AppDispatch } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

interface Props {}

export const Login: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	//@ts-ignore
	const users = useSelector(getUsers)
	const status = useSelector(getUserStatus)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUsers())
		}
	}, [])

	const selectUser = (userId: string) => {
		dispatch(updateLogUser(userId))
		navigate('/home')
	}

	const usersOptions = Object.entries(users).map((user: any) => (
		<Dropdown.Item key={user[1].id} onClick={() => selectUser(user[1].id)}>
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
