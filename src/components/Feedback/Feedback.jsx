import React from 'react';
import { nanoid } from 'nanoid';
// import { PropTypes } from 'prop-types';
import css from "./Feedback.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        key={nanoid()}
        className={css.voteButton}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        key={nanoid()}
        className={css.voteButton}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        key={nanoid()}
        className={css.voteButton}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;