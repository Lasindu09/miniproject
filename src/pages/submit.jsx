import React from 'react'
import '../submit.css';
import Navbar from '../components/nav';

export default function submit() {
  return (
    <><><>
    <Navbar/>
    <div className='topic'>
        <h2>INTERN WEB HUB</h2>      
    </div></>

    <div className='message'>
        <h3>Your Submission Successful!</h3>
    </div></>

    <div className='chatbot'>
        <button variant="outlined" size="large">Try Out Chatbot</button>
    </div></>
  )
}
