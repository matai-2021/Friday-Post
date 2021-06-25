const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

// /api/va/cards/
router.get('/', (req, res) => {
  db.getMessages()
    .then(messages => {
      res.json(messages)
      return null
    })
    .catch(err => {
      console.error(err)
    })
})

// /api/va/cards/
router.post('/', (req, res) => {
  // console.log(req.body)
  db.addMessage(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
