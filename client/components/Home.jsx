import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getMessages, addMessageAPI } from '../api'

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
      <h1>Haha</h1>
      <form>
        <label htmlFor='name'>Name:
          <input id="name"
            name="name"
            onChange={handleChange}
            value={form.name} />
        </label>
        <label htmlFor='message'>Message:
          <textarea id="message"
            name="message"
            onChange={handleChange}
            value={form.message}
            rows="4"
            cols="50">
          </textarea>
        </label>
        <label htmlFor='photo'>Gift:
          <input type='radio'
            id='photo'
            name='photoUrl'
            onChange={handleChange}
            value='cat' />
          <label htmlFor='cutePicture'>Send a kitty!</label>
          <input type='radio'
            id='photo'
            name='photoUrl'
            onChange={handleChange}
            value='dog' />
          <label htmlFor='cutePicture'>Send a dog!</label>

          <div className='check'><div className='inside'></div></div>
        </label>
        <button onClick={handleSubmit}>Send your message</button>
      </form>

    </>
  )
}

export default Home
