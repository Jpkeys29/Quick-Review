import { DESCRIPT, QUEST, INTROPROB } from "./questiArray"

export default function Questions() {
    return (
        <div className="questions">
            <ul>
                {QUEST.map( question => (
                    <Question question={question} key={question.id}/>
                ))}
            </ul>
            <ul>
                {DESCRIPT.map(question => (
                    <Question question={question} key={question.id}/>
                ))}
            </ul>
            <ul>
                {INTROPROB.map(question => (
                    <Question question={question} key={question.id}/>
                ))}
            </ul>
        </div>
    )
}

function Question({question}) {
    return (
        <div>
            <ul>
                <h4>{question.title}</h4>
                <span>{question.answer} </span>
            </ul>
        </div>
    )
}