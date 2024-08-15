import { formatDateToCustomFormat } from '../../utils/utils';
import { Comment } from '../../types/comment';
import { RATING_STAR_WIDTH } from '../../const';
import { normalizedRating } from '../../utils/utils';

type ReviewsItemProps = {
  userComment: Comment;
}

function ReviewsItem({userComment}: ReviewsItemProps) {
  const {date, comment, rating, user: {name, avatarUrl, isPro}} = userComment;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
        {isPro &&
        <span className="reviews__user-status">
          Pro
        </span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${normalizedRating(rating) * RATING_STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time
          className="reviews__time"
          dateTime={formatDateToCustomFormat(date, 'YYYY-MM-DD')}
        >
          {formatDateToCustomFormat(date,'MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
