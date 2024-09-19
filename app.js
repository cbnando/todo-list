const express = require('express')

const app = express()

app.use(express.json())

require('./routes/app.routes')(app)

module.exports = app;