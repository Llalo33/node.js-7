const express = require('express')
const server = express()

const port = 3000

server.get('/' , (req, res) => {
    res.send('Hello World')
})

server.get('/users' , (req, res) => {
    res.send(['user1','user2','user3'])
})

server.post('/users' , (req, res) => {
    res.send('Юзер добавлен')
})

server.delete('/users/:id' , (req, res) => {
    console.log(req.params)
   res.send(`юзер с ID ${req.params.id} удален`)
})

server.patch('/users/:id' , (req, res) => {
    console.log(req.params)
    res.send(`юзер с ID ${req.params.id} изменен`)
})

server.get('/admin' , (req, res) => {
    res.send('не хватает прав доступа')
})

server.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
})