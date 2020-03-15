const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const func = require('./client/app');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = 3000;

//app.use(express.static('client'));
// app.use('/static', express.static(__dirname + '/client'))
app.use('/', express.static(path.join(__dirname, 'client')));
//lets us see all incoming requests
app.use(morgan('short'));
app.use(urlencodedParser);
// app.use(urlencodedParser);
// app.use(func.jsonParse);

// app.use('/static', express.static(path.join(__dirname, 'client')))

// app.get('/', function(req, res){
//   console.log('responding to root route');
//   res.send('hello from root route')
// })

// app.get('/index.html', function(req, res){
//   console.log('responding to root route');
//   res.render('index.html', req.body);
// })

app.post('/',  function(req, res) {
  let testing = func.jsonParse(req.body.message);
  console.log('testing', testing);
});

// app.post('/index.html', urlencodedParser,  function(req, res) {
//   console.log('success');
//   res.render('index.html', req.body);
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// app.listen(port, () => console.log(`req.body=== ${port}!`))


//in pack.json
  //don't need main value
  //make sure you have express as a dependency
  //have nodemon in npm start
  ///*"node server.js"*/ nodemon --ignore node_modules server