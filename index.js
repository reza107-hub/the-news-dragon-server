const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const catagories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors())
app.get('/catagories', (req, res) => {
    res.send(catagories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
