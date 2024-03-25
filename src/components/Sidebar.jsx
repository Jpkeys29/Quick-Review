import Questions from "./Questions";

export default function SideBar({children, selectedQuestion, onSelectedQuestion, topicSelected, setTopicSelected}) {
    return (
        <div className="sidebar">
            {children}
            
            <button onClick={() => setTopicSelected('A')}>Experiment Design</button>
            <button onClick={() => setTopicSelected('B')}>Descriptive Statistics</button> 
            <button onClick={() => setTopicSelected('C')}>Introduction to Probability</button>
        </div>
        )
}

