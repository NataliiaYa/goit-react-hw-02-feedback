import React from "react";
import css from './App.module.css';
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./Feedback/Feedback";
import Section from "./Section/Section";
import Notification from "./Notifications/Notification";

export class App extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = event => {
    this.setState({ [event]: this.state[event] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const percent = (this.state.good * 100) / total;
    return Math.random(percent);
  };

  render() {
    return (
        <div className={css['feedback-cont']} >
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}>
            </FeedbackOptions>
          </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />) : (<Notification message={'There is no feedback'} />)}
          </Section>
        </div>
    );
  }
}

export default App;