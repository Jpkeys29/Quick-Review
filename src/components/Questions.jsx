import { QUEST } from "./questiArray"

export default function Questions() {
    return (
        <div className="questions">
            {QUEST.map((question) => <p key={question.id}>{question.title} {question.answer} </p> )}
        </div>
    )
}