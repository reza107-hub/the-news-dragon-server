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

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n=> n._id === id)
    res.send(selectedNews)
})
app.get('/catagories/:id', (req, res) => {
    const id = req.params.id
    if(id == 0){
        res.send(news)
    }
    else{
        const selectedNews = news.filter(n=> n.category_id === id)
    res.send(selectedNews)
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})