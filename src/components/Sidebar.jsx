import Questions from "./Questions";
import { useState } from 'react'

export default function SideBar({children, topicSelected, setTopicSelected}) {
    return (
        <div className="sidebar">
            {children}
            
            <button className={topicSelected === 'A' ? 'active' : null} onClick={() => setTopicSelected('A') }>Experiment Design</button>
            <button className={topicSelected === 'B' ? 'active' : null} onClick={() => setTopicSelected('B')}>Descriptive Statistics</button> 
            <button className={topicSelected === 'C' ? 'active' : null} onClick={() => setTopicSelected('C')}>Introduction to Probability</button>
        </div>
        )
}

