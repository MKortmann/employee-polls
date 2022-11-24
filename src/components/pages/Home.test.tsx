import { render } from '@testing-library/react'
import { Home } from './Home'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

describe('Home', () => {
	it('will match snapshot', () => {
		const component: any = render(
			<Provider store={store}>
				<Home />
			</Provider>
		)
		expect(component).toMatchSnapshot()
	})
})
