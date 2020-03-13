const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 3000;
//
app.get('/', function(req, res){
  console.log('responding to root route');
  res.send('hello from root route')
})

// app.post('/', urlencodedParser,  function(req, res) {
//   console.log('success');

// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// app.listen(port, () => console.log(`req.body=== ${port}!`))
// app.use('/static', express.static(path.join(__dirname, 'client')))

//in pack.json
  //don't need main value
  //make sure you have express as a dependency
  //have nodemon in npm start
  ///*"node server.js"*/ nodemon --ignore node_modules server