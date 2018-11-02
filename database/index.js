const mysql = require('mysql');

const con = mysql.createConnection({
  user: 'mina',
  password: '1581338',
  host: 'localhost',
  database: 'reviews',
});

const saveToUserReviewtable = (data, cb) => {
  const sql = 'INSERT INTO userReview (username, photo, rateNumber, createdAt, review, homeID, report) VALUES (?,?,?,?,?,?,?)';
  con.query(sql, [data.username, data.photo, data.rateNumber,
    data.createdAt, data.review, data.homeID, data.report], (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  });
};

const saveToRatingtable = (data, cb) => {
  const sql = 'INSERT INTO rating (numberOfReviews, overallrate, accuracy, communication, cleanliness, location, check_in, value) VALUES (?,?,?,?,?,?,?,?)';
  con.query(sql, [data.numberOfReviews, data.overallrate, data.accuracy,
    data.communication, data.cleanliness, data.location, data.check_in,
    data.value], (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  });
};

const getData = (id, cb) => {
  const sql = `select * from userReview inner join rating on (rating.id=${id} AND userReview.homeID=${id})`;
  con.query(sql, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports.saveToUserReviewtable = saveToUserReviewtable;
module.exports.saveToRatingtable = saveToRatingtable;
module.exports.getData = getData;
