import { render, screen, fireEvent } from '@testing-library/react'
import { NavbarComponent } from './NavbarComponent'
import { Login } from './Login'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { MemoryRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'

describe('NewQuestion', () => {
	it('check if the user click at logout, it will move to login page', async () => {
		await render(
			<MemoryRouter initialEntries={['/navbar']}>
				<Provider store={store}>
					<Routes>
						<Route path='/navbar' element={<NavbarComponent />} />
						<Route path='/' element={<Login />} />
					</Routes>
				</Provider>
			</MemoryRouter>
		)

		const btnLogOut = screen.getByText('Logout')
		fireEvent.click(btnLogOut)
		expect(screen.getByRole('button')).toHaveTextContent('Select an user')
	})
})
