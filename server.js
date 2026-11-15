
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const figlet = require('figlet')

const server = http.createServer(function(req, res) {

    const parsedUrl = url.parse(req.url, true)
    const page = parsedUrl.pathname
    const params = parsedUrl.query

    if (page === '/') {

        serveFile('index.html', 'text/html', res)

    } else if (page === '/api') {

        const choice = String(params.choice || '').toLowerCase()

        if (choice !== 'heads' && choice !== 'tails') {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Choose heads or tails' }))
            return
        }

        const coinflip = ['heads', 'tails']

        const randomFlip = coinflip[Math.floor(Math.random() * 2)]

        let winOrLose = ''

        if (choice === randomFlip) {
            winOrLose = 'You Win!'
        } else {
            winOrLose = 'You Lost!'
        }

        const objToJson = {
            myChoice: choice,
            theFlip: `The flip was ${randomFlip}`,
            flipResult: winOrLose
        }

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(objToJson))

    } else if (page === '/css/style.css') {

        serveFile('css/style.css', 'text/css', res)

    } else if (page === '/js/main.js') {

        serveFile('js/main.js', 'text/javascript', res)

    } else if (page === '/allison-saeng-ZWiaGCFcfJ0-unsplash.jpg') {

        serveFile('allison-saeng-ZWiaGCFcfJ0-unsplash.jpg', 'image/jpeg', res)

    } else {

        figlet('404!!', function(err, data) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end(err ? 'Page not found' : data)
        })

    }

})

function serveFile(fileName, contentType, res) {

    const filePath = path.join(__dirname, fileName)

    fs.readFile(filePath, function(err, data) {

        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('File not found')
            return
        }

        res.writeHead(200, { 'Content-Type': contentType })
        res.end(data)

    })

}

const PORT = process.env.PORT || 8000

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Coin Toss server running on port ${PORT}`)
})

