import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewQuestion } from './NewQuestion'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { MemoryRouter } from 'react-router'

describe('NewQuestion', () => {
	it('check if the submit button is disabled by default', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<NewQuestion />
				</Provider>
			</MemoryRouter>
		)
		expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled()
	})
	it('check if the submit button is enabled as soon as we write the two vote options', async () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<NewQuestion />
				</Provider>
			</MemoryRouter>
		)

		await userEvent.type(
			screen.getByPlaceholderText(/Enter the first option/i),
			'read a newspaper'
		)
		await userEvent.type(
			screen.getByPlaceholderText(/Enter the second option/i),
			'read a book'
		)

		expect(screen.getByRole('button', { name: /Submit/i })).toBeEnabled()
	})
})
