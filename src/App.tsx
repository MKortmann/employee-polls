import { Route, Routes, Navigate } from 'react-router-dom'

import './App.scss'
import {
	Login,
	Home,
	NavbarComponent,
	NotFound,
	Question,
	NewQuestion,
	Leaderboard,
} from './components/index'
import { useSelector } from 'react-redux'

function App() {
	const loggedUser = useSelector((state: any) => state.users.loggedUser)

	return (
		<div className='App'>
			{loggedUser !== '' && <NavbarComponent></NavbarComponent>}
			<Routes>
				<Route path={'/'} element={<Login />}></Route>
				<Route
					path={'/home'}
					element={loggedUser !== '' ? <Home /> : <Navigate to='/' />}></Route>
				<Route
					path={'/questions/:id'}
					element={
						loggedUser !== '' ? (
							<Question key={Date.now()} />
						) : (
							<Navigate to='/' state={{ from: '/questions/:id' }} />
						)
					}></Route>
				<Route
					path={'/add'}
					element={
						loggedUser !== '' ? (
							<NewQuestion key={Date.now()} />
						) : (
							<Navigate to='/' state={{ from: '/add' }} />
						)
					}></Route>
				<Route
					path={'/leaderboard'}
					element={
						loggedUser !== '' ? (
							<Leaderboard key={Date.now()} />
						) : (
							<Navigate to='/' state={{ from: '/leaderboard' }} />
						)
					}></Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
