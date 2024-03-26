import { useState } from 'react'
import './index.css';
import SideBar from './components/Sidebar';
import Questions from './components/Questions';
import NoTopicSelected from './components/NoTopicSelected';
import { QUEST } from './components/questiArray';

function App() {
  const[topicSelected, setTopicSelected] = useState('');

  return (
    <main > 
      <Header />  
      <div className='app'>
        <SideBar topicSelected={topicSelected} setTopicSelected={setTopicSelected}>
          <p>Topics </p>
        </SideBar>
        {topicSelected ? (<Questions topicSelected={topicSelected} setTopicSelected={setTopicSelected}/>) : <NoTopicSelected/>} 
      </div>
    </main>
  )
}





function Header() {
  return <h1 className='header'>Statistics Review</h1>
}

export default App
