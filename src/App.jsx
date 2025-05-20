import { useState } from 'react'
import './index.css';
import { Route, Routes, Link } from 'react-router-dom';
import { QUEST } from './components/questiArray';
import { Header } from './components/Header';
import { Draggable } from './components/Draggable';
import { NavBar } from './components/NavBar';
import { Questionnaire } from './components/Questionnaire';

function App() {
  const [topicSelected, setTopicSelected] = useState('');

  return (
    <div>
      <Header />
      <NavBar />
      <main className='main'>
        <Routes>
          <Route path='questionnaire' element={<Questionnaire topicSelected={topicSelected} setTopicSelected={setTopicSelected}/>}/> 
          <Route path='/' element={<Draggable />}  />
        </Routes>
      </main>
    </div>
  )
}


export default App
