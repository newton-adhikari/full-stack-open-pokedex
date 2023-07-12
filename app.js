const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = typeof process !== 'undefined' ? process.env.PORT || 5000 : 5000;

app.use(express.static('dist'))

app.get('/', () => {
  console.log('hello from express')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
