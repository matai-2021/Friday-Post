const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMessages,
  addMessage
}

function getMessages (db = connection) {
  return db('messages').select()
}

function addMessage (messageData, db = connection) {
  const { name, message, photoUrl } = messageData
  const date = new Date()
  const dateString = toString(date)
  console.log('db.Addmessege: ', messageData, dateString)

  return db('messages')
    .insert({ name, date, message, photoUrl })
    .then(([id]) => {
      console.log('added: ', id, date, name, message, photoUrl)
      return null
    })
    .catch(err => {
      console.error('fell over at db.addmessage: ', err)
    })
}
