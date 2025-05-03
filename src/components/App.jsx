import { useState, useEffect} from 'react'
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'

export default function App() {
  const [values, setValues] = useState(() => {
    const savedObject = localStorage.getItem("saved-feedback");
     
    if (savedObject !== null) {
      const parseData = JSON.parse(savedObject);
      return parseData
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });
  
  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);
  
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options count={values} onValues={setValues} totalFeedback={totalFeedback}/>
      <Feedback positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} good={values.good} neutral={values.neutral} bad={values.bad} />
      <Notification totalFeedback={totalFeedback} />
      
    </>
  );
};