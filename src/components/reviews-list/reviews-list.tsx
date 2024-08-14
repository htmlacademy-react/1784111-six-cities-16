import { Comments } from '../../types/comment';
type ReviewsListProps = {
  comments: Comments;
  normalizedRating: (rating: number) => number;
  ratingStarWidth: number;
}

function ReviewsList({comments, normalizedRating, ratingStarWidth}: ReviewsListProps) {
  function formatDateToCustomFormat(dateString: string, format: string) {
    const date = new Date(dateString);

    let options: Intl.DateTimeFormatOptions;

    switch (format) {
      case 'MMMM YYYY':
        options = { month: 'long', year: 'numeric' };
        break;
      case 'YYYY-MM-DD':
        options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        break;
      default:
        throw new Error(`Unsupported format: ${format}`);
    }

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(date);

    return formattedDate;
  }

  return (
    <ul className="reviews__list">
      {comments.map(({id, user, rating, comment, date}) => (
        <li key={id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {user.name}
            </span>
            {user.isPro &&
            <span className="reviews__user-status">
              Pro
            </span>}
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${normalizedRating(rating) * ratingStarWidth}%`}}></span>
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
      ))}
    </ul>
  );
}

export default ReviewsList;
