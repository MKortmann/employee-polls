import { fireEvent, render } from '@testing-library/react'
import { Pool } from './Pool'
import { MemoryRouter } from 'react-router'

describe('Pool', () => {
	it('Check if the button show is there', () => {
		const pool = [
			'xj352vofupe1dqz9emx13r',
			{
				id: 'xj352vofupe1dqz9emx13r',
				author: 'mtsamis',
				timestamp: 1493579767190,
				optionOne: {
					votes: ['mtsamis', 'zoshikanlu'],
					text: 'deploy to production once every two weeks',
				},
				optionTwo: {
					votes: ['tylermcginnis'],
					text: 'deploy to production once every month',
				},
			},
		]
		const component: any = render(
			<MemoryRouter>
				<Pool pool={pool}></Pool>
			</MemoryRouter>
		)

		// expect(getByText(/Show/i)).toBeInTheDocument()
		expect(component.getByTestId('show')).toBeInTheDocument()
	})
	it('Check that the url change if I click at show', async () => {
		const pool = [
			'xj352vofupe1dqz9emx13r',
			{
				id: 'xj352vofupe1dqz9emx13r',
				author: 'mtsamis',
				timestamp: 1493579767190,
				optionOne: {
					votes: ['mtsamis', 'zoshikanlu'],
					text: 'deploy to production once every two weeks',
				},
				optionTwo: {
					votes: ['tylermcginnis'],
					text: 'deploy to production once every month',
				},
			},
		]
		const component: any = render(
			<MemoryRouter>
				<Pool pool={pool}></Pool>
			</MemoryRouter>
		)

		const btnShow = component.getByTestId('show')
		await fireEvent.click(btnShow)

		expect(global.window.location.pathname).toContain(
			'/question/xj352vofupe1dqz9emx13r'
		)
	})
})
