const express = require("express")

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hi home page.... Meow! Meow!')
})

app.listen(port, ()=> {
    console.log(`Server listening on post ${port}`)
})