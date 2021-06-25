import React, { useState, useEffect } from 'react'

function Board (prop) {
  const { messages } = prop

  console.log(messages[0])

  return (
    <>
      <h1>My Board</h1>
      <section className='cards'>
        {messages.map(item => (
          <>
            <article className='card'>
              <img src={item.photoUrl} />
              <h3>{item.name}</h3>
              <p>{item.message}</p>
              <blockquote>{item.quote}</blockquote>
              <p>{item.date}</p>
            </article>
          </>
        ))}
      </section>
    </>
  )
}

export default Board
