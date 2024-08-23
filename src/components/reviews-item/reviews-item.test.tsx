import { render, screen } from '@testing-library/react';
import ReviewsItem from './revievs-item';
import { generateMockComment } from '../../mocks/comment';
import { formatDateToCustomFormat } from '../../utils/utils';

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const mockComment = generateMockComment();

    render(<ReviewsItem userComment={mockComment} />);
    const avatarImg = screen.getByRole('img');
    const datetimeDate = formatDateToCustomFormat(mockComment.date, 'YYYY-MM-DD');
    const textDate = formatDateToCustomFormat(mockComment.date,'MMMM YYYY');
    const timeElement = screen.getByText(textDate);

    expect(screen.getByText(mockComment.user.name)).toBeInTheDocument();
    expect(screen.getByText(mockComment.comment)).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(timeElement.textContent).toBe(textDate);
    expect(timeElement).toHaveAttribute('datetime', datetimeDate);
    expect(avatarImg).toHaveAttribute('src', mockComment.user.avatarUrl);
    expect(avatarImg).toHaveAttribute('alt', 'Reviews avatar');
    if (mockComment.user.isPro) {
      expect(screen.getByText('Pro')).toBeInTheDocument();
    }
  });
});
