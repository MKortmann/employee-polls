import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'
import { Login } from './components/pages/Login'
import { Home } from './components/pages/Home'
import { NavbarComponent } from './components/pages/Nav'
import { useSelector } from 'react-redux'

function App() {
	const loggedUser = useSelector((state: any) => state.users.loggedUser)

	return (
		<BrowserRouter>
			<div className='App'>
				{loggedUser !== '' && <NavbarComponent></NavbarComponent>}
				<Routes>
					<Route path={'/'} element={<Login></Login>}></Route>
					<Route path={'/home'} element={<Home></Home>}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
