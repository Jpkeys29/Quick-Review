import { DESCRIPT, QUEST } from "./questiArray"

export default function Questions() {
    return (
        <div className="questions">
            {QUEST.map( question => (
                <ul key={question.id}>
                    <li>
                        {question.title}
                    </li>
                    <p>{question.answer} </p>
                </ul>
            ))}
            {DESCRIPT.map(question => (
                <ul key={question.id}>
                    <p>
                        {question.title}
                    </p>
                </ul>

            ))}

            {/* {QUEST.map(question => <p key={question.id}>{question.title} {question.answer} </p> )}
            {DESCRIPT.map(question => <p key={question.id} >{question.title} {question.answer} </p>)}  */}
        </div>
    )
}