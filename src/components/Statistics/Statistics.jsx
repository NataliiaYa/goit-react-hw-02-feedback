import React from "react";
import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePresentage }) => {
    return (
        <div>
            <p className={css.statInfo}>Good: {good}</p>
            <p className={css.statInfo}>Neutral: {neutral}</p>
            <p className={css.statInfo}>Bad: {bad}</p>
            <p className={css.statInfo}>Total: {total}</p>
            <p className={css.statInfo}>Positive feedback: {positivePresentage} %</p>
        </div>
    );
};

Statistics.PropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePresentage: PropTypes.number.isRequired,
};

export default Statistics;