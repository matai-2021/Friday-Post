import React, { useState, useEffect } from 'react'

function Board (prop) {
  const { messages } = prop

  console.log(messages[0])

  return (
    <>
      <div className='inner board'>
        <h1>My Board</h1>
        <section className='cards'>
          {messages.map(item => (
            <>
              <article className='card'>
                <img src={item.photoUrl} />
                <h3>{item.name}</h3>
                <p>{item.message}</p>
                <blockquote className="quote">{item.quote}</blockquote>
                <p className="date">{item.date}</p>
              </article>
            </>
          ))}
        </section>
      </div>
    </>
  )
}

export default Board
