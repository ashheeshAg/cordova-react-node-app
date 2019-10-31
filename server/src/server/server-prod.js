/* eslint-disable */
import express from 'express'

import routes from '../routes/index'
import initState from '../data/state'

const app = express()


const state = initState()
routes(app, state)
const PORT = process.env.PORT || 8080

var a = app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
var io = require('socket.io')(a, { serveClient: false });
app.set('socketio', io);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('message', {'message': 'hello world'});
});