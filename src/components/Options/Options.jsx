import css from "./Options.module.css"

export default function Options({ count, onValues, totalFeedback }) {
     
    const updateFeedback = feedbackType => {
        onValues({
            ...count,
            [feedbackType]: count[feedbackType] + 1,
        });
    };
    
    const resetFeedback = () => {
        onValues({
        good: 0,
        neutral: 0,
        bad: 0,
    });
    };
    
    return (
    <div className={css.container}>
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
       {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
    );
}