import React from 'react'

import './App.scss'
import { Login } from './components/pages/Login'
// import { fetchUsers } from './slices/usersSlice'

function App() {
	return (
		<div className='App'>
			Employee Poll App
			<Login />
		</div>
	)
}

export default App
