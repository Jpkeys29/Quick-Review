import NoTopicSelected from "./NoTopicSelected"
import { DESCRIPT, QUEST, INTROPROB } from "./questiArray"

export default function Questions({ topicSelected }) {
    const categoryA = <ul>
        {QUEST.map(question => (
            <Question question={question} key={question.id} />
        ))}
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
            <ul>
                <h4>{question.title}</h4>
                <span>{question.answer} </span>
            </ul>
        </div>
    )
}