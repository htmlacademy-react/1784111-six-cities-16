import { Comments } from '../../types/comment';
import ReviewsItem from '../reviews-item/revievs-item';
import { USER_COMMENTS_TO_SHOW } from '../../const';

type ReviewsListProps = {
  comments: Comments;
}

function ReviewsList({comments}: ReviewsListProps) {
  const userComments = [comments].reverse();

  return (
    <ul className="reviews__list">
      {userComments.slice(0, USER_COMMENTS_TO_SHOW).map((comment) => (
        <ReviewsItem
          userComment={comment}
          key={comment.id}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
