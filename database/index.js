var mysql = require('mysql');
var con =  mysql.createConnection({
    user: 'mina',
    password: '1581338',
    host: 'localhost',
    database: 'reviews'
})

var saveToUserReviewtable = (data, cb) => {
    var sql = 'INSERT INTO userReview (username, photo, rateNumber, createdAt, review, roomID) VALUES (?,?,?,?,?,?)';
    con.query(sql, [data.username, data.photo, data.rateNumber, data.createdAt, data.review, data.roomID], (err) => {
        if(err) {
            cb(err, null);
        }
    });
}

var saveToRatingtable = (data, cb) => {
    var sql = 'INSERT INTO rating (numberOfReviews, overallrate, accuracy, communication, cleanliness, location, check_in, value) VALUES (?,?,?,?,?,?,?,?)';
    con.query(sql, [data.numberOfReviews, data.overallrate, data.accuracy, data.communication, data.cleanliness, data.location, data.check_in, data.value], (err) => {
        if(err) {
            cb(err, null);
        }
    });
}

var getData = (id, cb) => {
    var sql = `select * from userReview inner join rating on (rating.id=${id} AND userReview.roomID=${id})`;
    con.query(sql, (err, data) => {
        if(err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    })
}

module.exports.saveToUserReviewtable = saveToUserReviewtable;
module.exports.saveToRatingtable = saveToRatingtable;
module.exports.getData = getData;