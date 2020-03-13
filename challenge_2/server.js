const express = require('express');
const app = express()
const path = require('path');
const port = 3000

app.get('/', (req, res) => res.send('Heyzy World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// app.use('/static', express.static(path.join(__dirname, 'client')))

//in pack.json
  //don't need main value
  //make sure you have express as a dependency
  //have nodemon in npm start
  ///*"node server.js"*/ nodemon --ignore node_modules server