import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'
import { Http2ServerRequest } from 'http2'

const app = express()
app.use(cors())
app.use(compression())

app.get('/', (req, res) => {
    res.send('menus-diarios api')
})

const port = process.env.PORT || 3000

const httpServer = createServer(app)

httpServer.listen({
    port
}, () => console.log(`Server running on port ${port}`))