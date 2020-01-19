const express = require('express')
const auth = require('basic-auth')
const app = express()
const port = 8080

app.use((req, res, next) => {
  console.log("request received")
  console.log(req.headers)
  console.log('reading auth')
  user = auth(req)
  console.log('auth read')

  if(user === undefined ) {
    res.status(418)
    res.end('Proxy auth required')
    return
  }
  if(user['name'] ==='ricklee' && user['pass'] === '123456') {
    res.status(200)
    res.end()
  } else {
    res.status(401)
    res.end('Unauthorized')
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))