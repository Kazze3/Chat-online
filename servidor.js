const https= require('http')
const express= require('express')
const app = express()

const servidorHTTP= https.createServer(app)
const io = require('socket.io')(servidorHTTP) //traminite o socket pro servidor

io.addListener('connection', (socket)=>{
    console.log('1 usuario conectou') // informa quando atualizar
   
    socket.addListener('Nova mensagem', (msg)=>{ //recebend msg
          io.emit('Nova mensagem', msg) //servidor repassa a msg
    })
    
})

app.use(express.static('public'))

servidorHTTP.listen(3000,'192.168.0.13',console.log('Rodou mininu'))
