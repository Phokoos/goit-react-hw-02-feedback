import PropTypes from 'prop-types';

import css from './notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <h2 className={css.feedback__secondTitle}>{message}</h2>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
