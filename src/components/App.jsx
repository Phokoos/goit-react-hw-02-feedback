import css from './feedback.module.css';
import { Component } from 'react';

import FeedbackBtn from './buttons/buttons';
import Statictics from './statictics/statictics';
import Notification from './notification/notification';

// import Feedback from './feedback/feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButton = event => {
    event.preventDefault();
    const { innerText } = event.target;

    this.setState(prevState => ({
      [innerText]: prevState[innerText] + 1,
    }));
  };

  countTotalFeedback = () => {
    const sum = Object.values(this.state).reduce(
      (sum, value) => sum + value,
      0
    );
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.state.good / (this.countTotalFeedback() / 100);
    return Math.round(sum);
  };

  render() {
    return (
      <div className={css.feedback__container}>
        <h2 className={css.feedback__secondTitle}>Please leave feedback</h2>
        <FeedbackBtn clickButton={this.clickButton} />
        {this.countTotalFeedback() > 0 ? (
          <div>
            <h2 className={css.feedback__secondTitle}>Statictics</h2>
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          </div>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}

export default App;
