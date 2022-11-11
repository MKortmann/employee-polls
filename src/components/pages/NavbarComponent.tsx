import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, useNavigate } from 'react-router-dom'
import { css, cx } from '@emotion/css'
import { useSelector } from 'react-redux'
import {
	getLoggedUser,
	getAvatarComponent,
} from '../../redux/slices/usersSlice'

interface Props {}
export const NavbarComponent: React.FC<Props> = () => {
	const style = subNavStyles()

	const user: any = useSelector(getLoggedUser)
	const avatar: any = useSelector(getAvatarComponent)

	return (
		<>
			<Navbar
				bg='dark'
				variant='dark'
				expand='lg'
				sticky='top'
				className={css`
					height: 80px;
				`}>
				<Navbar.Brand
					className={css`
						font-size: 40px;
						display: flex;
						align-items: center;
						margin-left: 20px;
					`}>
					<img
						alt='mk.svg'
						src='/mk.svg'
						width='60'
						height='60'
						className='d-inline-block align-top'
					/>{' '}
					Employee Poll
				</Navbar.Brand>
				<Nav className='me-auto my-2 my-lg-0 mx-5'>
					<NavLink
						className={cx(style.link)}
						to='/home'
						style={({ isActive }) => ({
							color: isActive ? 'red' : 'white',
						})}>
						Home
					</NavLink>
					<NavLink
						className={cx(style.link)}
						to='/leaderboard'
						style={({ isActive }) => ({
							color: isActive ? 'red' : 'white',
						})}>
						Leaderboard
					</NavLink>

					<NavLink
						className={cx(style.link)}
						to='/new'
						style={({ isActive }) => ({
							color: isActive ? 'red' : 'white',
						})}>
						New
					</NavLink>
				</Nav>
				<Navbar.Brand
					className={css`
						margin-right: 30px;
					`}>
					<img
						alt='avatar'
						// src='/mk.svg'
						src={avatar}
						width='45'
						height='30'
						className='d-inline-block align-top'
					/>{' '}
					{user[0][1]?.name}
				</Navbar.Brand>
			</Navbar>
		</>
	)
}

export const subNavStyles = () => {
	return {
		link: css`
			text-decoration: none;
			font-size: 30px;
			margin: 15px;
		`,
	}
}