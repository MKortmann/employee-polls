import { Route, Routes } from 'react-router-dom'

import './App.scss'
import { Login, Home, NavbarComponent, NotFound } from './components/index'
import { useSelector } from 'react-redux'
import { Question } from './components/pages/Question'

function App() {
	const loggedUser = useSelector((state: any) => state.users.loggedUser)

	return (
		<div className='App'>
			{loggedUser !== '' && <NavbarComponent></NavbarComponent>}
			<Routes>
				<Route path={'/'} element={<Login />}></Route>
				<Route path={'/home'} element={<Home />}></Route>
				<Route path={'/question/:id'} element={<Question />}></Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
