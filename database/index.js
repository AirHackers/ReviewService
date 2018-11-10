const Promise = require('bluebird');
const mysql = require('mysql');
// var Promise = require("bluebird");
// Promise.promisifyAll(require("redis"));

const con = mysql.createConnection({
  user: 'root',
  password: '123',
  host: '172.22.0.2',
  port: 3306,
  database: 'reviews',
});

const saveToUserReviewtableAsync = data => new Promise((resolve, reject) => {
  const sql = 'INSERT INTO userReview (username, photo, rateNumber, createdAt, review, homeID, report) VALUES (?,?,?,?,?,?,?)';
  con.query(sql, [data.username, data.photo, data.rateNumber,
    data.createdAt, data.review, data.homeID, data.report], (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
});
const saveToRatingtableAsync = data => new Promise((resolve, reject) => {
  const sql = 'INSERT INTO rating (numberOfReviews, overallrate, accuracy, communication, cleanliness, location, check_in, value) VALUES (?,?,?,?,?,?,?,?)';
  con.query(sql, [data.numberOfReviews, data.overallrate, data.accuracy,
    data.communication, data.cleanliness, data.location, data.check_in,
    data.value], (error, results) => {
    if (error) {
      // eslint-disable-next-line no-undef
      reject(error);
    } else {
      // eslint-disable-next-line no-undef
      resolve(results);
    }
  });
});

const getData = (id, cb) => {
  const sql = `select * from userReview inner join rating on (rating.id=${id} AND userReview.homeID=${id})`;
  con.query(sql, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data); 
    }
  });
  //con.end();
};

module.exports.saveToUserReviewtableAsync = saveToUserReviewtableAsync;
module.exports.saveToRatingtableAsync = saveToRatingtableAsync;
module.exports.getData = getData;
module.exports.con = con;
