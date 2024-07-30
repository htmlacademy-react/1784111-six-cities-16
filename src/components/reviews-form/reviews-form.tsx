import { useState } from 'react';
import FormRatinInput from '../form-rating-input/form-rating-input';

const MAX_REVIEWS_RARING = 5;
const REVIEWS_RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

function ReviewsForm() {
  const [rating, setRating] = useState<number | ''>('');
  const [reviewText, setReviewText] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleRatingChange = (ratingValue: number) => {
    setRating(ratingValue);

    if (rating !== '') {
      setIsSubmitDisabled(false);
    }
  };

  const handleReviewTextChange = (value: string) => {
    setReviewText(value);

    if (value.length >= 50 && value.length <= 300) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEWS_RATING_TITLES.map((title, index) => {
          const ratingNumber = MAX_REVIEWS_RARING - index;
          return (
            <FormRatinInput
              key={crypto.randomUUID()}
              title={title}
              rating={ratingNumber}
              onFormRatinInputChange={handleRatingChange}
            />
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewText}
        onChange={(e) => handleReviewTextChange(e.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className={`reviews__submit form__submit button ${isSubmitDisabled ? 'disabled' : ''}`}
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;

