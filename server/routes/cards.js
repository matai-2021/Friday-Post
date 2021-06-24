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

module.exports = router
