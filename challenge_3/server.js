//SERVER------------------------------------
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
//DATABASE---------------------------------------
const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sparkie1218',
  database: 'userinfo'
})

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});




app.use('/', express.static(path.join(__dirname, 'public')));

app.use(morgan('short'));

// app.get('/', (req, res) => {

// })

app.post('/', (req, res) => {
  res.redirect('/f1')
})

app.get('/f1', (req, res) => {

})

app.post('/f1', (req, res) => {
  res.redirect('/f2')
})

// app.get('/f2', (req, res) => {

// })

app.post('/f2', (req, res) => {
  res.redirect('/f3')
})

// app.get('/f3', (req, res) => {
// })

app.post('/f3', (req, res) => {
  res.redirect('/final')
})

 app.listen(port, () => console.log('server running...'));


// ReactDOM.render(<App />, document.getElementById("app"));



 module.exports = connection;

