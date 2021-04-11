const jwt = require('jsonwebtoken')
const Resturant = require('../models/resturant')

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const resturant = await Resturant.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!resturant) {
            throw new Erro()
        }
        req.token = token
        req.resturant = resturant
        next()
    } catch (e) {
        res.status(401).send({ error: 'Plz auth' })
    }
}

module.exports = auth