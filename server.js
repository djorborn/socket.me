const path = require('path')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const WebSocketServer = require('websocket').server

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('main')
})
app.get('/t', (req, res) => {
  res.send('<DOCTYPE html><html><head><script>var socket = new WebSocket("ws://localhost:8080");socket.addEventListener("open", ()=>{console.log("connect")})</script></head><body><h1>hi</h1></body></html>)')
})
http.listen(8080, () => console.log('Server Yeah'))

const wsServer = new WebSocketServer({
  httpServer: http
})

wsServer.on('request', function (req) {
  const socket = req.accept()

  socket.sendUTF('Hello')

  socket.on('message', (msg) => {
    console.log(msg)

    socket.sendUTF('more')
  })
})
