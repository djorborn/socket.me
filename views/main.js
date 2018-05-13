var socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', () => {
  console.log('Connected')
})

socket.addEventListener('message', (msg) => {
  console.log(msg)
})

setTimeout(function () {
  socket.send('Meow')
}, 3000)
