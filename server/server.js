var express = require('express');
var path =  require('path');
var db = require('./../database/index.js');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + './../client/dist/'));

app.get('/api/reviews', (req, res) => {
    function randNumber(num) {
        return Math.floor((Math.random() * num) + 1);
    }
    db.getData(randNumber(10), (err, result) => {
        if(err) {
            throw err;
        } else {
            console.log(result);
            res.send('hi');
        }
    })
});

app.get('/f', (req, res) => {
    console.log(__dirname);
    res.send('hello');
})

app.listen(3003, () => console.log('listening on port 3003'));
