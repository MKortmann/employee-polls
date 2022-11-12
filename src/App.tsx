import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'
import { Login, Home, NavbarComponent, NotFound } from './components/index'
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
					<Route path='*' element={<NotFound></NotFound>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
