import { useState } from 'react'
import './index.css';
import SideBar from './components/Sidebar';
import Questions from './components/Questions';
import NoTopicSelected from './components/NoTopicSelected';
import { QUEST } from './components/questiArray';

function App() {
  const[selectedQuestion, setSelectedQuestion] = useState ({
    selectedQuestionId: undefined,
    // questions: []
  })

function handleAddQuestion() {
  setSelectedQuestion(prevState => {
    return {
      ...prevState,
      selectedQuestionId: null,
    }
  });
}

let pregunta;

if (selectedQuestion.selectedQuestionId === null) {
  pregunta = <Questions />
} else if (selectedQuestion.selectedQuestionId === undefined) {
  pregunta = <NoTopicSelected />
}

  return (
    <main> 
      <header className='header'>
        <h1>Statistics Review</h1>

        <p>Click on the Topic of your choice </p>
      </header>
      <div className='container'>
        <SideBar  onSelectedQuestion={handleAddQuestion} />
        {pregunta}
      </div>
    </main>
  )
}

export default App
