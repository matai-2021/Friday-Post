const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const cards = require('./routes/cards')
server.use('/api/v1/cards', cards)

module.exports = server
