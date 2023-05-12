import PropTypes from 'prop-types';

import css from './buttons.module.css';

const FeedbackBtn = ({ clickButton }) => {
  return (
    <div className={css.feedback__buttons}>
      <button
        className={css.feedback__button}
        onClick={clickButton}
        type="button"
      >
        good
      </button>
      <button
        className={css.feedback__button}
        onClick={clickButton}
        type="button"
      >
        neutral
      </button>
      <button
        className={css.feedback__button}
        onClick={clickButton}
        type="button"
      >
        bad
      </button>
    </div>
  );
};

FeedbackBtn.propTypes = {
  clickButton: PropTypes.func,
};

export default FeedbackBtn;
