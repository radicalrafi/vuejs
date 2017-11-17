const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/search/:word', function (req, res) {
  let str = fs.readFileSync('sample.txt')
  let newStr = str.toString()
  let seek = 'riotous waves rolled by which by one of those'
  let i = newStr.search(seek)
  if (i === -1) {
    res.send({
      query: 'Not Found'
    })
  } else {
    res.send({
      query: i.toLocaleString(),
      chapter: newStr.substr(i, seek.length)
    })
  }
})

app.listen(3000)
