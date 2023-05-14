import css from './feedback.module.css';
import { Component } from 'react';

import FeedbackBtn from './buttons/buttons';
import Statictics from './statictics/statictics';
import Notification from './notification/notification';
import Section from './section/section';

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
        <Section title="Please leave feedback">
          <FeedbackBtn
            options={Object.keys(this.state)}
            clickButton={this.clickButton}
          />
        </Section>
        <Section title="Statictics">
          {this.countTotalFeedback() > 0 ? (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
