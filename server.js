const http = require('http')
const fs = require('fs') // where the server talks to the browser
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

const server = http.createServer(function (req, res) { // creates the server, sends requets to the broswer and responds to what the server sent back 

  const page = url.parse(req.url).pathname // this gets the page and forms the path being requested in url
  const params = querystring.parse(url.parse(req.url).query)// the acutal info the broswer sent so in my game when i type heads the api changes to ${'choice} = heads

  console.log(page)

  if (page == '/') {

    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    })

  }

  else if (page == '/api') {

    let coinflip = ['heads', 'tails']
    let winOrLose = ''

    if ('choice' in params) {

      console.log(params['choice'])

      let randomFlip = coinflip[Math.floor(Math.random() * 2)]

      if (params['choice'] == randomFlip) {
        winOrLose = 'You Win'
      }

      else {
        winOrLose = 'You Lost'
      }

      console.log(randomFlip)

      res.writeHead(200, { 'Content-Type': 'application/json' })

      const objToJson = {
        myChoice: params['choice'],
        theFlip: `The flip was ${randomFlip}`,
        flipResult: winOrLose
      }

      res.end(JSON.stringify(objToJson)) // this is actually sending the coin flip result back to the front end 
    }

  }

  else if (page == '/css/style.css') {

    fs.readFile('css/style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.write(data)
      res.end()
    })

  }

  else if (page == '/js/main.js') {

    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' })
      res.write(data)
      res.end()
    })

  }



  else if (page == '/allison-saeng-ZWiaGCFcfJ0-unsplash.jpg') {
    fs.readFile('allison-saeng-ZWiaGCFcfJ0-unsplash.jpg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      res.write(data)
      res.end()
    })

  }





  else {

    figlet('404!!', function (err, data) {

      if (err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
      }

      res.write(data)
      res.end()

    })

  }

})

server.listen(8000)