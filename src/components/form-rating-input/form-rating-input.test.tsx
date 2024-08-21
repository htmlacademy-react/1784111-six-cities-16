import { render } from '@testing-library/react';
import FormRatinInput from './form-rating-input';

describe('Component: FormRatinInput', () => {
  it('should render radio input and label correctly based on props', () => {
    const rating = 5;
    const title = 'Title';
    const checkedRating = 5;
    const onFormRatinInputChange = vi.fn();

    const { container } = render(
      <FormRatinInput
        rating={rating}
        title={title}
        checkedRating={checkedRating}
        onFormRatinInputChange={onFormRatinInputChange}
      />
    );
    const radioButton = container.querySelector('input[name="rating"]') as HTMLInputElement;
    const label = container.querySelector(`label[for="${rating}-stars"]`);

    expect(radioButton).not.toBeNull();
    expect(radioButton).toHaveAttribute('type', 'radio');
    expect(radioButton).toHaveAttribute('value', String(rating));
    expect(radioButton).toHaveAttribute('id', `${rating}-stars`);
    expect(radioButton.checked).toBeTruthy();
    expect(label).not.toBeNull();
    expect(label).toHaveAttribute('for', `${rating}-stars`);
  });

  it('should not render radio input as checked when rating does not match', () => {
    const rating = 5;
    const title = 'Title';
    const checkedRating = 3;
    const onFormRatinInputChange = vi.fn();

    const { container } = render(
      <FormRatinInput
        rating={rating}
        title={title}
        checkedRating={checkedRating}
        onFormRatinInputChange={onFormRatinInputChange}
      />
    );
    const radioButton = container.querySelector('input[name="rating"]') as HTMLInputElement;

    expect(radioButton).not.toBeNull();
    expect(radioButton.checked).toBeFalsy();
  });
});
