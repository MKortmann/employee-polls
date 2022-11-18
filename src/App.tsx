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
					path={'/question/:id'}
					element={
						loggedUser !== '' ? (
							<Question key={Date.now()} />
						) : (
							<Navigate to='/' />
						)
					}></Route>
				<Route
					path={'/newQuestion'}
					element={
						loggedUser !== '' ? (
							<NewQuestion key={Date.now()} />
						) : (
							<Navigate to='/' />
						)
					}></Route>
				<Route
					path={'/leaderboard'}
					element={
						loggedUser !== '' ? (
							<Leaderboard key={Date.now()} />
						) : (
							<Navigate to='/' />
						)
					}></Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
