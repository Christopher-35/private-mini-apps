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
  password: '',
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

app.post('/home', (req, res) => {
console.log('post hit');
let arr =["test", "test", "test"];
  connection.query("INSERT INTO checkouts(name, email, password)VALUES (?) ", [arr], function(err, result){
    if(err){
        console.log("ERROR--->", err);
    };
  });


})

app.get('/f1', (req, res) => {
  console.log('get2', req.body);
})

app.post('/f1', (req, res) => {
  console.log('req.query==', req.query);
  if (req.body.name && req.body.email && req.body.password){
    let name= req.body.name + "";
    let email=req.body.email + "";
    let password=req.body.password + "";
    let arr =[];
    arr.push(name, email, password);
    connection.query(`INSERT INTO checkouts(name, email, password)VALUES (?) `, [arr], function(err, result){
      if(err)
          console.log(`ERROR--->`, err);
      });
    }




})

app.get('/f2', (req, res) => {

})

app.post('/f2', (req, res) => {
  console.log('inF2');
  if (req.body.Address1 && req.body.Address2 && req.body.City && req.body.State && req.body.zipcode && req. body.phoneNumber ) {

    let Address1= req.body.Address1 + "";
    let Address2=req.body.Address2 + "";
    let City=req.body.City + "";
    let State = req.body.State + "";
    let zipcode = req.body.zipcode + "";
    let phoneNumber = req.body.phoneNumber + "";
    let arr =[];

    arr.push(Address1, Address2, City, State, zipcode, phoneNumber);

    connection.query(`SELECT MAX(id) FROM checkouts`, function(err, lastId){
      if (err) {
        console.log(`error--->`, err);
      }
      lastId = lastId[0][`MAX(id)`];

    connection.query(`UPDATE checkouts SET address1=?, address2=?, city=?, state=?, zipcode=?, phonenum=? WHERE id=${lastId}`, arr, function(err, result){
      if (err) {
          console.log(`ERROR--->`, err);
      };
  })

    })

}
// var sql = "UPDATE trn_employee set first_name =? , last_name =?  WHERE employee_id = ?";

// var query = connection.query(sql, ["Vinayak", "Patil", 1], function(err, result) {
//     console.log("Record Updated!!");
//     console.log(result);


});

// app.get('/f3', (req, res) => {
// })

app.post('/f3', (req, res) => {
  console.log('INF3');

  if (req.body.cardNo && req.body.expirationDate && req.body.cvv && req.body.billingZipCode) {

    let cardNo = req.body.cardNo + "";
    let expirationDate = req.body.expirationDate + "";
    let cvv = req.body.cvv + "";
    let billingZipCode = req.body.billingZipCode + "";

    //creditno | expirdata | cvv  | billingzip
    let arr =[];
    arr.push(cardNo, expirationDate, cvv, billingZipCode);

    connection.query(`SELECT MAX(id) FROM checkouts`, function(err, lastId){
      if (err) {
        console.log(`error--->`, err);
      }
      lastId = lastId[0][`MAX(id)`];

//`UPDATE checkouts SET address1=?, address2=?, city=?, state=?, zipcode=?, phonenum=? WHERE id=${lastId}`
    connection.query(`UPDATE checkouts SET creditno=?, expirdata=?, cvv=?, billingzip=? WHERE id=${lastId}`, arr, function(err, result){
      if (err) {
          console.log(`ERROR--->`, err);
      };

})

    })
}

})

 app.listen(port, () => console.log('server running...'));


// ReactDOM.render(<App />, document.getElementById("app"));



 module.exports = connection;

