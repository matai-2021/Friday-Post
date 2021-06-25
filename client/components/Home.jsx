import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getMessagesAPI, getMessages, addMessageAPI } from '../api'

function Home () {
  const [form, setForm] = useState({
    name: '',
    message: '',
    photoUrl: ''
  })
  const history = useHistory()

  function handleChange (event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
    console.log('change handled bruh', form)
  }

  function handleSubmit (event) {
    const { name, message, photoUrl } = form
    event.preventDefault()
    addMessageAPI({ name, message, photoUrl })
      .then(() => {
        history.push('/board')
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <div className='inner home'>
        <h1>Card4U</h1>
        <h3>Please fill out form to send card</h3>
        <form>
          <label className="col-left" htmlFor='name'>Name:</label>
          <input className="col-right" id="name"
            name="name"
            onChange={handleChange}
            value={form.name} />
          <label className="col-left" htmlFor='message'>Message:</label>
          <textarea className="col-right" id="message"
            name="message"
            onChange={handleChange}
            value={form.message}
            rows="4"
            cols="50">
          </textarea>
          <label htmlFor='photo'>Gift:
            <ul>
              <li>
                <input type='radio'
                  id='photo'
                  name='photoUrl'
                  onChange={handleChange}
                  value='cat' />
                <label htmlFor='cutePicture'>Send a kitty!</label>
                <div className='check'><div className='inside'></div></div>
              </li>
              <li>
                <input type='radio'
                  id='photo'
                  name='photoUrl'
                  onChange={handleChange}
                  value='dog' />
                <label htmlFor='cutePicture'>send a dog!</label>
                <div className='check'><div className='inside'></div></div>
              </li>
            </ul>
          </label>
          <button onClick={handleSubmit}>Send your message</button>
        </form>
      </div>

    </>
  )
}

export default Home
