import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Questions from './Questions';
import SideBar from './Sidebar';
import NoTopicSelected from './NoTopicSelected';

export const Questionnaire = ({topicSelected, setTopicSelected}) => {
    function handleStart() {
        setTopicSelected('');
    }
    return( 
        <div class="wrapper">
            <div>
                <SideBar
                    topicSelected={topicSelected}
                    setTopicSelected={setTopicSelected}>
                </SideBar>


                {topicSelected && <button onClick={handleStart}>Start</button>}
            </div>
          {topicSelected ? (<Questions
            topicSelected={topicSelected}
            setTopicSelected={setTopicSelected}
            />) : <NoTopicSelected />}
        </div>        
    )
}
