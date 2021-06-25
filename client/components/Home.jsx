import React, { useState, useEffect } from 'react'
import { getMessagesAPI } from '../api'

function Home () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessagesAPI()
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
      {/* {messages.map(item => (
        <>
          <h3>{item.name}</h3>
          <p>{item.message}</p>
        </>
      ))} */}
      <div className='inner home'>
        <h1>Card4U</h1>
        <h3>Please fill out form to send card</h3>
        <form>
          <label>Name:
            <input id="" name="" onChange="" value="" />
          </label>
          <label>Message:
            <textarea id="" name="" onChange="" value="" rows="4" cols="50">
            </textarea>
          </label>
          <label>Gift:
            <ul>
              <li>
                <input type='radio' id='dog' name='animal' onChange='' value='dog' />
                <label htmlFor='dog'>dog</label>
                <div className='check'><div className='inside'></div></div>
              </li>
              <li>
                <input type='radio' id='cat' name='animal' onChange='' value='cat' />
                <label htmlFor='cat'>cat</label>
                <div className='check'><div className='inside'></div></div>
              </li>
            </ul>
          </label>
          <button>Send your message</button>
        </form>
      </div>

    </>
  )
}

export default Home
