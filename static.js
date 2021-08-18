import finalhandler from 'finalhandler'
import serveStatic from 'serve-static'
import http from 'http'

const serve = serveStatic('docs', { index: ['index.html'] })

const server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res))
})

console.log('Server listening: http://localhost:' + 3000)
server.listen(3000)
