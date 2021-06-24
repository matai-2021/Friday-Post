const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json(['Well diamante ', 'banana trifle'])
})

module.exports = router
