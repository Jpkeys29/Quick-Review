import Questions from "./Questions";

export default function SideBar({children, selectedQuestion, onSelectedQuestion}) {
    return (
        <div className="sidebar">
            {children}
            <button onClick={() => onSelectedQuestion(selectedQuestion)}>Experiment Design</button>
            <button>Descriptive Statistics</button> 
        </div>
        )
}