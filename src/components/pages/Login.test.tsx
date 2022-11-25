import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Login } from './Login'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { MemoryRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'

describe('NewQuestion', () => {
	it('check if the select button has the text select an user', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<Login />
				</Provider>
			</MemoryRouter>
		)

		const select = screen.getByRole('button')

		expect(select).toHaveTextContent('Select an user')
	})
})
