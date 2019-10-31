/* eslint-disable */
import express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import routes from '../routes/index'
import initState from '../data/state'

const app = express(),
  compiler = webpack(config)
const state = initState()
routes(app, state)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)
app.use(webpackHotMiddleware(compiler))

const PORT = process.env.PORT || 8080
var a = app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
var io = require('socket.io')(a);
app.set('socketio', io);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('message', {'message': 'hello world'});
});
