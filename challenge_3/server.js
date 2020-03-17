const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');



app.use('/', express.static(path.join(__dirname, 'public')));

app.use(morgan('short'));

app.post('/', (req, res) => {
  res.redirect('/f1')
})
 app.listen(port, () => console.log('server running...'));