const express = require('express');
const path = require('path');
const db = require('./../database/index.js');

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/homes/:homeID/', express.static(`${__dirname}./../client/dist/`));

app.get('/api/homes/:homeID/allReviews', (req, res) => {
  db.getData(req.params.homeID, (err, result) => {
    if (err) {
      throw err;
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});

app.get('/f', (req, res) => {
  console.log(__dirname);
  res.send('hello');
});

app.listen(3003, () => console.log('listening on port 3003'));
