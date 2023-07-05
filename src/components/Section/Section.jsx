import React from "react";
import css from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return (
        <div className={css.section}>
            <h3 className={css.titleSection}>{title}</h3>
            {children}
        </div>

    );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;