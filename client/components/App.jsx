import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { getMessagesAPI } from '../api'
import Board from './Board'
import Home from './Home'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessagesAPI()
      .then(incMessages => {
        console.log('useEffect:', incMessages)
        setMessages(incMessages)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  console.log('state; ', messages)

  return (
    <>
      <main>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/board' render={() => <Board />} />
      </main>

    </>
  )
}

export default App
