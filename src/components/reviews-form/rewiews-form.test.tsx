import { render, screen } from '@testing-library/react';
import ReviewsForm from './reviews-form';

describe('ReviewsForm', () => {
  it('should render correctly', () => {
    render(<ReviewsForm id="some-id" />);
    const submitButton = document.body.querySelector('.reviews__submit[type="submit"]');
    const ratingInput = document.body.querySelector('.form__rating-input');

    expect(screen.getByText(/your review/i)).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
    expect(submitButton).toBeInTheDocument();
    expect(ratingInput).toBeInTheDocument();
    expect(submitButton).toHaveClass('disabled');
  });
});
