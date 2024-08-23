import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render logo within the footer', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(getByTestId('logo')).toBeInTheDocument();
  });
});
