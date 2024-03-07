import { useState } from 'react'
import './index.css';
import SideBar from './components/Sidebar';
import Questions from './components/Questions';
import NoTopicSelected from './components/NoTopicSelected';

function App() {

  return (
    <main className='container'> 
      <header className='header'>
        <h1>Statistics Review</h1>
        <p>Click on the Topic of your choice </p>
      </header>
      <SideBar />
      <Questions />
      <NoTopicSelected />
    </main>
  )
}

export default App
