import { useState } from 'react'
import './index.css';
import SideBar from './components/Sidebar';
import Questions from './components/Questions';
import NoTopicSelected from './components/NoTopicSelected';

function App() {
  const[selectedQuestion, setSelectedQuestion] = useState ({
    selectedQuestionId: undefined,
    questions: []
  })

function handleAddQuestion() {
  setSelectedQuestion(prevState => {
    return {
      ...prevState,
      selectedQuestionId: null,
    }
  });
}
  return (
    <main className='container'> 
      <header className='header'>
        <h1>Statistics Review</h1>
        <p>Click on the Topic of your choice </p>
      </header>
      <SideBar onSelectedQuestion={handleAddQuestion}/>
      <NoTopicSelected />
    </main>
  )
}

export default App
