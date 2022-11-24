import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import { MemoryRouter } from 'react-router'
import { _saveQuestion } from './API/_DATA'

test('renders learn react link', () => {
	const { getByText } = render(
		<MemoryRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</MemoryRouter>
	)

	expect(getByText(/Welcome to Employee Polls/i)).toBeInTheDocument()
})
