import { render } from '@testing-library/react';
import OffersNotFound from './offers-not-found';

describe('Component: OffersNotFound', () => {
  it('should render correctly', () => {
    const { getByText } = render(<OffersNotFound activeCity={'Paris'}/>);

    expect(getByText('No places to stay available')).toBeInTheDocument();
    expect(getByText('We could not find any property available at the moment in')).toBeInTheDocument();
  });
});
