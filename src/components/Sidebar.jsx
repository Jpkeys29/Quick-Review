import Questions from "./Questions";

export default function SideBar({children, selectedQuestion, onSelectedQuestion}) {
    return (
        <div className="sidebar">
            {children}
            
            <button onClick={() => onSelectedQuestion(selectedQuestion)}>Experiment Design</button>
            <button onClick={() => onSelectedQuestion(selectedQuestion)}>Descriptive Statistics</button> 
            <button onClick={() => onSelectedQuestion(selectedQuestion)}>Introduction to Probability</button>
        </div>
        )
}

