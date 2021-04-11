const mongoose = require('mongoose')

//const connectionURL = 'mongodb://127.0.0.1:27017'

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})