const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const valid = require('validator')
const jwt = require('jsonwebtoken')


const resturantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!valid.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password can not contain "password"')
            }
        }
    },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    Category: {
        type: String,
        trim: true
    },
    phone: {
        type: [String]
    },
    avatar: {
        type: Buffer
    },
    discription: {
        type: String,
        trim: true
    },
    rate: {
        type: Number
    },
    menu: {
        type: [{
            _id: {
                type: mongoose.ObjectId,
            },
            name: {
                type: String,
                required: true,
                trim: true
            },
            price: {
                type: Number,
                required: true
            },
            img: {
                type: Buffer
            }

        }]
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],

})

resturantSchema.methods.toJSON = function() {
    const resturant = this
    const resturantObject = resturant.toObject()

    delete resturantObject.password
    delete resturantObject.tokens
    delete resturantObject.avatar

    return resturantObject
}

resturantSchema.methods.generateAuthToken = async function() {
    const resturant = this
    const token = jwt.sign({ _id: resturant._id.toString() }, process.env.JWT_SECRET)
    console.log(token)
    resturant.tokens = resturant.tokens.concat({ token })
    await resturant.save()
    return token
}

resturantSchema.pre('save', async function(next) {
    const resturant = this

    if (resturant.isModified('password')) {
        resturant.password = await bcrypt.hash(resturant.password, 8)
    }

    next()
})

resturantSchema.statics.findByCredentials = async(email, password) => {
    const resturant = await Resturant.findOne({ email })
    if (!resturant) {
        console.log('e e')
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, resturant.password)
    if (!isMatch) {
        console.log('e p')
        throw new Error('Unable to login')
    }
    return resturant
}

const Resturant = mongoose.model('Resturant', resturantSchema)

module.exports = Resturant