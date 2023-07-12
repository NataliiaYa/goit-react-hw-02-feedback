import React from 'react';
// import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import css from "./Feedback.module.css";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={css.voteButton}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div>
//       <button
//         key={options}
//         className={css.voteButton}
//         type="button"
//         name="good"
//         onClick={onLeaveFeedback}
//       >
//         Good
//       </button>
//       <button
//         key={options}
//         className={css.voteButton}
//         type="button"
//         name="neutral"
//         onClick={onLeaveFeedback}
//       >
//         Neutral
//       </button>
//       <button
//         key={options}
//         className={css.voteButton}
//         type="button"
//         name="bad"
//         onClick={onLeaveFeedback}
//       >
//         Bad
//       </button>
//     </div>
//   );
// };

// FeedbackOptions.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired
// };

export default FeedbackOptions;