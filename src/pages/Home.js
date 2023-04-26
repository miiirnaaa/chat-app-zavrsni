import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Conversation from '../components/Chatbox/Conversation'

const Home = () => {
  return (
    <div className='home'>
              <div className="container">
        <Sidebar/>
        <Conversation/>
      </div>
      </div>
  )
}

export default Home