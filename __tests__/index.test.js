import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home page', () => {
    it('renders a code tag', () => {
        render(<Home />);

        const heading = screen.getByRole('code');

        expect(heading).toBeInTheDocument();
    })
});
