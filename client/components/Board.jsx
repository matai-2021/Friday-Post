import React, { useState, useEffect } from 'react'

function Board () {
  return (
    <>
      <h1>My Board</h1>
      <section className='cards'>
        <article className='card'>
          <img src='https://solidstarts.com/wp-content/uploads/Lime_edited-480x320.jpg' />
          <h3>Name</h3>
          <p>Message</p>
          <blockquote>Quote</blockquote>
          <p>Time Stamp</p>
        </article>
        <article className='card'>
          <img src='https://solidstarts.com/wp-content/uploads/Lime_edited-480x320.jpg' />
          <h3>Name</h3>
          <p>Message</p>
          <blockquote>Quote</blockquote>
          <p>Time Stamp</p>
        </article>
      </section>
    </>
  )
}

export default Board
