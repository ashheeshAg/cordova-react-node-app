import bodyParser from 'body-parser'
import cors from 'cors'
import trade from './trades'

const setupRoutes = (server, state) => {
  server.use(cors())
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
  })
  server.use(bodyParser.json({ type: '*/*' }))
  trade(server, state)
}

export default setupRoutes
