const express = require("express")
const request = require('request-promise')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hi home page.... Meow! Meow!, I dey restart oooo...')
})

app.get('/testy', async (req, res) => {
        const docker2 = await request({
            method: 'GET',
            //url: "http://docker-practice2-clusterip-srv:4001/docker2", //name of clusterIP, its port and endpoint
            url: "http://bisidocker.com/docker2",
            json: true
        })
     res.send(docker2)
})

app.get('/docker1', (req, res) => {
    res.send('This is coming from docker one baby')
})

app.listen(port, ()=> {
    console.log('Third version...')
    console.log(`Server listening on post ${port}`)
})