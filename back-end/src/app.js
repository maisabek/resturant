const express = require('express')
require('./db/mongoose')
const Resturant = require('./router/resturant')

const app = express()

app.use(express.json())
app.use(Resturant)

module.exports = app