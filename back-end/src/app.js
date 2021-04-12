const express = require('express')
require('./db/mongoose')
const Resturant = require('./router/resturant')

const app = express()

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE')
//     res.header('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type')
//     res.header('Access-Control-Expose-Headers', 'Content-Length,Content-Range')
//     next()
// })

app.use(express.json())
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,  Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.use(Resturant)

module.exports = app

