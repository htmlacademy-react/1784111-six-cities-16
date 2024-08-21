import { render, screen } from '@testing-library/react';
import { generateMockComment } from '../../mocks/comment';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {
  const mockComment = generateMockComment();

  it('should render list of comments correctly', () => {
    render(<ReviewsList comments={[mockComment]} />);

    expect(screen.getByText(mockComment.comment)).toBeInTheDocument();
  });
});
