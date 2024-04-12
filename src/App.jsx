import { useState } from 'react'
import './index.css';
import SideBar from './components/Sidebar';
import Questions from './components/Questions';
import NoTopicSelected from './components/NoTopicSelected';
import { QUEST } from './components/questiArray';
import Header from './components/Header';

function App() {
  const [topicSelected, setTopicSelected] = useState('');

  function handleStart() {
    setTopicSelected('');
  }

  return (
    <div>
        <Header />
      <main >
        <div className='app'>
          <SideBar
            topicSelected={topicSelected}
            setTopicSelected={setTopicSelected}>
            <p>Topics </p>
          </SideBar>
          {topicSelected ? (<Questions
            topicSelected={topicSelected}
            setTopicSelected={setTopicSelected}
          />) : <NoTopicSelected />}
        </div>
        {topicSelected && <button onClick={handleStart}>Start</button>}
      </main>
    </div>
  )
}


export default App
