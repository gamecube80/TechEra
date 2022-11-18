const express = require('express')

var parseUrl = require('body-parser')
const app = express()


let encodeUrl = parseUrl.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', encodeUrl, (req, res) => {
    console.log('Form request:', req.body)
    res.sendStatus(200)
})

app.listen(5500)