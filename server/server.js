const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/homes/:homeID/', express.static(`${__dirname}./../client/dist/`));

// Allow CORS for a given endpoint
const allowCORS = function(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

app.get('/api/homes/:homeID/allReviews', (req, res) => {
  db.getData(req.params.homeID, (err, result) => {
    if (err) {
      throw err;
    } else {
      allowCORS(res);
      res.send(result);
    }
  });
});

app.listen(3003, () => console.log('listening on port 3003'));
