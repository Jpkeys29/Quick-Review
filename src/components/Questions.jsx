import NoTopicSelected from "./NoTopicSelected"
import { DESCRIPT, QUEST, INTROPROB } from "./questiArray"
import { useState } from 'react'


export default function Questions({ topicSelected }) {
    const[currentIndex, setCurrentIndex] = useState(0);

    function handleNextQuestion() {
        setCurrentIndex(current => current + 1);
    }

    function handlePrevious() {
        setCurrentIndex(current => current - 1);
    }

    const categoryA = <ul>
        <h2> {QUEST[currentIndex].title}</h2>
        <p>{QUEST[currentIndex].answer}</p> 
        <button onClick={handlePrevious} disabled={currentIndex < 1}>Previous</button>
        <button onClick={handleNextQuestion} disabled={currentIndex === QUEST.length - 1} >Next</button>
    </ul>

    const categoryB = <ul>
        {DESCRIPT.map(question => (
            <Question question={question} key={question.id} />
        ))}
    </ul>

    const categoryC = <ul>
        {INTROPROB.map(question => (
            <Question question={question} key={question.id} />
        ))}
    </ul>

    if (topicSelected === 'A') {
        return (
            <div className="questions">
                {categoryA}
            </div>
        )
    }

    if (topicSelected === 'B') {
        return (
            <div className="questions">
                {categoryB}
            </div>
        )
    }

    if (topicSelected === 'C') {
        return (
            <div className="questions">
                {categoryC}
            </div>
        )
    }
}

function Question({ question }) {
    return (
        <div>
            <h2>{question.title}</h2>
            <p>{question.answer} </p>
        </div>
        // <div>
        //     <ul>
        //         <h4>{question.title}</h4>
        //         <span>{question.answer} </span>
        //     </ul>
        // </div>
    )
}