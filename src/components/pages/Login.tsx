import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers, getUsers, increment } from '../../redux/slices/usersSlice'
import type { AppDispatch } from '../../redux/store'

interface Props {}

export const Login: React.FC<Props> = () => {
	const dispatch = useDispatch<AppDispatch>()

	const users = useSelector<any>((state: any) => state.users)
	const userStatus = useSelector<any>((state: any) => state.users.status)

	useEffect(() => {
		if (userStatus === 'idle') {
			dispatch(fetchUsers())
		}
	}, [])

	return (
		<>
			<div>Login Page: </div>
			<div>Loading users </div>

			{JSON.stringify(users)}
		</>
	)
}
