import { render } from '@testing-library/react'
import Home from '../src/app/page'

it('renders Home page unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
});
