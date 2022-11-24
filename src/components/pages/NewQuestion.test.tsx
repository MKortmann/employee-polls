import { render, screen } from '@testing-library/react'
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
})
