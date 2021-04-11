const express = require('express')
const Resturant = require('../models/resturant')
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')


const router = new express.Router()



router.post('/resturant/register', async(req, res) => {
    const resturant = new Resturant(req.body)
    console.log(resturant)
    try {
        await resturant.save()
        const token = await resturant.generateAuthToken()
        res.status(201).send({ resturant, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/resturant/login', async(req, res) => {
    try {
        console.log(req.body.email, req.body.password)
        const resturant = await Resturant.findByCredentials(req.body.email, req.body.password)
        console.log(resturant)
        const token = await resturant.generateAuthToken()
        res.status(201).send({ resturant, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/resturant/me', auth, async(req, res) => {
    res.send(req.resturant)
})

router.post('/resturant/logout', auth, async(req, res) => {
    try {
        req.resturant.tokens = req.resturant.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.resturant.save()

        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/resturant/logoutAll', auth, async(req, res) => {
    try {
        req.resturant.tokens = []
        await req.resturant.save()

        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
})


// const upload = multer({
//     // storage: storage,
//     // dest: 'avatars',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Please upload a images'))
//         }
//         cb(undefined, true)
//     }
// })

// router.post('/resturant', upload.single('avatar'), async(req, res) => {

//     console.log(req.body.req)
//     const resturant = new Resturant(req.body)
//     const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
//     resturant.avatar = buffer

//     try {
//         await resturant.save()
//         res.status(201).send(resturant)
//     } catch (e) {
//         res.status(401).send(e)
//     }
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

module.exports = router