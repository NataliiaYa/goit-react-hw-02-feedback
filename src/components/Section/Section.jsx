import React from 'react';
// import css from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;