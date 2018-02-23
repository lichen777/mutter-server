var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var app = express()
var PORT = process.env.PORT || 8080

var morgan = require('morgan')
var logger = require('./logger')

var db = require('./models')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))

// Static directory
app.use(express.static('public'))

// Loggers
app.use(morgan('dev'))
app.use(logger)

// Routes
app.use(require('./routes/api-routes.js'))
app.use(require('./routes/html-routes.js'))

db.sequelize.sync()
  .then(function () {
    app.listen(PORT, function () {
      console.log('App listening on PORT ' + PORT)
    })
  })
