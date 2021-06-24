import React, { useState, useEffect } from 'react'
import { getMessages } from '../api'

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
      <h1>Team Post :-P</h1>
      <p>This is working yay</p>
      <p>{messages}</p>
    </>
  )
}

export default App
