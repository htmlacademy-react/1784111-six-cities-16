import { Comments } from '../../types/comment';
import ReviewsItem from '../reviews-item/revievs-item';

type ReviewsListProps = {
  comments: Comments;
}

function ReviewsList({comments}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem
          userComment={comment}
          key={comment.id}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
