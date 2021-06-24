import React, { useState, useEffect } from 'react'
import { getMessagesAPI } from '../api'

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

        <h1>Haha</h1>

        <div>{messages.map(message => (
          <p key={messages.id}>{message.quote}</p>
        ))}
        </div>
        {/* <form>
          <label>Name:
            <input id="" name="" onChange="" value="" />
          </label>
          <label>Message:
            <textarea id="" name="" onChange="" value="" rows="4" cols="50">
            </textarea>
          </label>
          <button>Send your message</button>
        </form> */}
      </main>

    </>
  )
}

export default App
