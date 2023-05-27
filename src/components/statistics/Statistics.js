import PropTypes from 'prop-types';
import React from 'react';
import './Statistics.css'

export const Statistics = ({ good, neutral, bad,  total, feedback}) => {
  return (
  <div>
    <p>
        good:<span>{good}</span>
      </p>
      <p>
        neutral:<span>{neutral}</span>
      </p>
      <p>
        bad:<span>{bad}</span>
      </p>
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{feedback}%</span>
      </p>
  </div>

  )
};

Statistics.propTypes = {
  
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
   
  };