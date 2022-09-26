const express = require('express')
const mongoose = require('mongoose')
const domain = 'http://localhost'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

try {
    mongoose.connect(`mongodb+srv://kame:Nw2tuySru2hr8Vi@main.z9dfj.mongodb.net/another-link-shortener`).then(
        console.log('Database connected!')
    )
} catch(e) {
    console.log('Cannot connect to database')
}

const link = require('./models/url.js')

app.post('/save', async (req, res) => {
    const longUrl = req.body.url
    const code = req.body.code

    try {
        await link.insertMany([{ 
            code,
            longUrl,
            shortUrl: `${domain}/${code}`
        }])

        return res.send(`${domain}/${code}`)
    } catch(e) {
        return res.send('Error')
    }
})

app.get('/:id', async (req, res) => {
    try {
        const code = req.params.id
        const data = await link.findOne({ code })

        res.redirect(data.longUrl)
    } catch(e) {
        res.status(404)
    }
})

export default {
    path: '/',
    handler: app
}