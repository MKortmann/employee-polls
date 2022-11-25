import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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
	// it('check if the submit button is clicked it comeback to home', async () => {
	// 	render(
	// 		<MemoryRouter>
	// 			<Provider store={store}>
	// 				<NewQuestion />
	// 			</Provider>
	// 		</MemoryRouter>
	// 	)

	// 	await userEvent.type(
	// 		screen.getByPlaceholderText(/Enter the first option/i),
	// 		'read a newspaper'
	// 	)
	// 	await userEvent.type(
	// 		screen.getByPlaceholderText(/Enter the second option/i),
	// 		'read a book'
	// 	)

	// 	fireEvent.click(screen.getByText('Submit'))

	// 	await waitFor(() => screen.getByText('Unanswered'))
	// 	screen.debug()

	// 	// expect(screen.getByRole('button', { name: /Submit/i })).toBeEnabled()
	// })
})
