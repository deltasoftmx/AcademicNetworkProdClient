const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('public'))
app.use('*', function(req, res) {
  let indexPath = path.join(__dirname, '..', 'public', 'index.html')
  res.sendFile(indexPath)
})

module.exports = app
