import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should renders correctly with valid type', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Logo type="header" />
      </MemoryRouter>
    );
    const linkElement = getByTestId('logo');
    const imgElement = linkElement.querySelector('img');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
    expect(imgElement).toHaveClass('header-logo');
    expect(imgElement?.style.width).toBe('81px');
    expect(imgElement?.style.height).toBe('41px');
  });
});
