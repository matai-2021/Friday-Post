import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { getMessages } from '../api'

function Home () {
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

      <h1>Haha</h1>
      <p>{messages}</p>
      <form>
        <label>Name:
          <input id="" name="" onChange="" value="" />
        </label>
        <label>Message:
          <textarea id="" name="" onChange="" value="" rows="4" cols="50">
          </textarea>
        </label>
        <button>Send your message</button>
      </form>

    </>
  )
}

export default Home
