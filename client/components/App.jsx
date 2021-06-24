import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { getMessages } from '../api'
import Board from './Board'
import Home from './Home'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages()
      .then(messages => {
        setMessages(messages)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <main>
        <div className='inner'>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/board' render={() => <Board />} />
        </div>
      </main>

    </>
  )
}

export default App
