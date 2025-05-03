import css from "./Feedback.module.css"

export default function Feedback({totalFeedback, positiveFeedback, good, neutral, bad}) {
    return (
<>
       {totalFeedback > 0 && <ul className={css.container}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
       </ul>}
</>
);
}