import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import feedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList';
import React, { useState } from 'react'

function App() {
  const [feedback, setFeedback]=useState(feedbackData)
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }
  return (
    <>
    <Header />
    <div className='container'>
    <FeedbackList feedback={feedback}
      handleDelete={deleteFeedback} />
    </div>
    </>
  );
}

export default App;
