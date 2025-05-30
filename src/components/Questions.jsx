import NoTopicSelected from "./NoTopicSelected"
import { DESCRIPT, QUEST, INTROPROB } from "./questiArray"
import { useState } from 'react'


export default function Questions({ topicSelected }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


    function handleNextQuestion() {
        setCurrentIndex(current => current + 1);
    }

    function handlePrevious() {
        setCurrentIndex(current => current - 1);
    }

    function handleToggle() {
        setIsOpen(currentState => !currentState);
    }

    function handleReset() {
        setCurrentIndex(0);
        setIsOpen(false)
    }

    const categoryA = <ul>
        <h5> {QUEST[currentIndex].title}</h5>
        {isOpen && <p>{QUEST[currentIndex].answer}</p>}
        <button onClick={handleToggle}>Answer</button>
        <div className="progress">
            <p className="number">Question Number: {currentIndex + 1} </p>
            <progress value={currentIndex+1} max={QUEST.length} className="color" />
            <p className="number">({currentIndex + 1}/{QUEST.length}) </p>
            {!isOpen && <button onClick={handleNextQuestion} disabled={currentIndex === QUEST.length - 1} >▶︎</button>}
        </div>

        <button onClick={handleReset} >Reset</button>
    </ul>

    const categoryB = <ul>
        <h3> {DESCRIPT[currentIndex].title}</h3>
        {isOpen && <p>{DESCRIPT[currentIndex].answer}</p>}
        <button onClick={handleToggle}>Answer</button>
        <div>
            <p className="number">Question Number: {currentIndex + 1} </p>
            <p className="number">({currentIndex + 1}/{QUEST.length}) </p>
            {!isOpen && <button onClick={handlePrevious} disabled={currentIndex < 1}>◀︎</button>}
            {!isOpen && <button onClick={handleNextQuestion} disabled={currentIndex === DESCRIPT.length - 1} >▶︎</button>}
        </div>
        <button onClick={handleReset} >Reset</button>
    </ul>

    const categoryC = <ul>
        <h3> {INTROPROB[currentIndex].title}</h3>
        {isOpen && <p>{INTROPROB[currentIndex].answer}</p>}
        <button onClick={handleToggle}>Answer</button>
        <div>
            <p className="number">Question Number: {currentIndex + 1} </p>
            <p className="number">({currentIndex + 1}/{QUEST.length}) </p>
            {!isOpen && <button onClick={handlePrevious} disabled={currentIndex < 1}>◀︎</button>}
            {!isOpen && <button onClick={handleNextQuestion} disabled={currentIndex === INTROPROB.length - 1} >▶︎</button>}
        </div>
        <button onClick={handleReset} >Reset</button>
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

