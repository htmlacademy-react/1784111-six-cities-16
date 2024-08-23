import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page404 from './page-404';

describe('Page404 Component', () => {
  it('renders Page404 component with correct content', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('return to main')).toBeInTheDocument();
  });

  it('links to the main route when clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );

    const linkElement = getByText('return to main');
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
