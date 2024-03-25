import { useState } from 'react'
import './index.css';
import SideBar from './components/Sidebar';
import Questions from './components/Questions';
import NoTopicSelected from './components/NoTopicSelected';
import { QUEST } from './components/questiArray';

function App() {
  const[selectedQuestion, setSelectedQuestion] = useState (false);

function handleAddQuestion(question) {
  setSelectedQuestion((displayQuestion) => !displayQuestion);
}
  return (
    <main > 
      <Header />  
      <div className='app'>
        <SideBar  selectedQuestion={selectedQuestion} onSelectedQuestion={handleAddQuestion}>
          <p>Click on the Topic of your choice </p>
          {selectedQuestion && <Questions />}
        </SideBar>
        {!selectedQuestion && <NoTopicSelected />}
      </div>
    </main>
  )
}





function Header() {
  return <h1 className='header'>Statistics Review</h1>
}

export default App
