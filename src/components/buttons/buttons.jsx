import PropTypes from 'prop-types';

import css from './buttons.module.css';

const FeedbackBtn = ({ options, clickButton }) => {
  return (
    <div className={css.feedback__buttons}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.feedback__button}
            onClick={clickButton}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.array,
  clickButton: PropTypes.func,
};

export default FeedbackBtn;
