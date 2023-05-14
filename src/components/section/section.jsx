import css from './section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.feedback__secondTitle}>{title}</h2>
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
};

export default Section;
