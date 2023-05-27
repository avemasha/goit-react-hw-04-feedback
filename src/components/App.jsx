import React, { useState } from 'react';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';

import {Section} from "./section/Section";

import { Statistics } from "./statistics/Statistics";
import { NotifyTitle } from "./notification/Notificaton";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = option => {
    switch (option) {
     case 'good':
       setGood(prevGood=>prevGood + 1);
       break;
     case 'neutral':
       setNeutral(prevNeutral => prevNeutral + 1);
       break;
     case 'bad':
       setBad( prevBad => prevBad + 1);
       break;
     default:
       return;  
   }
 };

  
const countTotalFeedback = () => {
  return good + neutral + bad;
 };


  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
  const positive = good * 100;
   return total === 0 ? 0 : Math.round(positive / total);
  };
  
  const positivePercentage = countPositiveFeedbackPercentage()

 
    return (
      <div
        style={{
          width: '1000px',
          margin: '0 auto',
          padding: '0 50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
             good={good}
             neutral={neutral}
             bad={bad}
             total={total}
             feedback={positivePercentage}
            />
          </Section>
        ) : (
          <NotifyTitle/>
        )}
      </div>
    );
  }

