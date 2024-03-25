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
        <SideBar onSelectedQuestion={handleAddQuestion}>
          <p>Topics </p>
        </SideBar>
        {selectedQuestion ? <Questions /> : <NoTopicSelected />}
      </div>
    </main>
  )
}





function Header() {
  return <h1 className='header'>Statistics Review</h1>
}

export default App
