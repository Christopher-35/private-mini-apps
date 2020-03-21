//SERVER------------------------------------
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('firstGet')
})

app.post('/', (req, res) => {
  console.log('req', req);
  if (req.body.name && req.body.email && req.body.password){
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;

  connection.query(`INSERT INTO checkouts (name, email, password) VALUES (${name}, ${email}, ${password})`, function(err, result){
      if(err)
          console.log("ERROR--->", err);
      });
    }


})

app.get('/f1', (req, res) => {
  console.log('get2', req.body);
})

app.post('/f1', (req, res) => {
  console.log('post', req.body);
  if (req.body.name && req.body.email && req.body.password){
    let name= req.body.name + "";
    let email=req.body.email + "";
    let password=req.body.password + "";
    let arr =[];
    arr.push(name, email, password);
  connection.query("INSERT INTO checkouts(name, email, password)VALUES (?) ", [arr], function(err, result){
      if(err)
          console.log("ERROR--->", err);
      });
    }
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

