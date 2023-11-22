const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/one', (req, res) => {
    // res.send('one')
    res.json({'one':1})
})
app.get('/two', (req, res) => {
    // res.send('two')
    res.send({'two':2})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})