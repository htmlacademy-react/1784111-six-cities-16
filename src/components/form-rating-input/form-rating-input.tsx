type FormRatinInputProps = {
  rating: number;
  title: string;
  onFormRatinInputChange: (ratingValue: number) => void;
}

function FormRatinInput({rating, title, onFormRatinInputChange}: FormRatinInputProps) {
  return (
    <>
      <input onChange={() => onFormRatinInputChange(rating)} className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default FormRatinInput;
