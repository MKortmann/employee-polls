import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import { MemoryRouter } from 'react-router'
import { _saveQuestion } from './API/_DATA'
// import { Login } from './components/index'

describe('App', () => {
	it('should render the dropdown select button', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		)
		const selectUser = screen.getByTestId('select-user')
		expect(selectUser).toBeInTheDocument()
	})

	it('renders learn react link', () => {
		const { getByText } = render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		)

		expect(getByText(/Welcome to Employee Polls/i)).toBeInTheDocument()
	})
})
