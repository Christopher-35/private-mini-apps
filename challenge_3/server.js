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
  database: 'userInfo'
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

app.post('/', (req, res) => {
  res.redirect('/f1')
})
 app.listen(port, () => console.log('server running...'));

 module.exports = connection;

 