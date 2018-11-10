const faker = require('faker');
const moment = require('moment');
const Promise = require('bluebird');
const db = require('./index.js');

let result;
function randNumber(num) {
  return Math.floor((Math.random() * num) + 1);
}

const collection = [];
// const arr = [];
for (let i = 0; i < 100; i += 1) {
  const rating = {
    numberOfReviews: randNumber(500),
    overallrate: randNumber(5),
    accuracy: randNumber(5),
    communication: randNumber(5),
    cleanliness: randNumber(5),
    location: randNumber(5),
    check_in: randNumber(5),
    value: randNumber(5),
  };
  collection.push(rating);
}

const dbInsertionToRating = () => {
  const array = [];
  for (let i = 0; i < collection.length; i += 1) {
    array.push(db.saveToRatingtableAsync(collection[i]));
  }
  Promise.all(array)
    .then((res) => {
      result = res.slice();
      console.log('here', res[1]);
      // db.con.end();
      return result;
    })
    // eslint-disable-next-line no-shadow
    .then((result) => {
      const arr = [];
      for (let i = 0; i < result.length; i += 1) {
        for (let j = 0; j < 10; j += 1) {
          const userreview = {
            username: faker.internet.userName(),
            review: faker.lorem.sentences(),
            rateNumber: randNumber(5),
            createdAt: moment(faker.date.past()).fromNow().toString(),
            homeID: result[i].insertId,
            photo: faker.image.avatar(),
            report: faker.lorem.sentence(),
          };
          arr.push(userreview);
        }
      }
      return arr;
    })
    .then((arr) => {
      const dbInsertionToReview = () => {
        const array2 = [];
        for (let i = 0; i < arr.length; i += 1) {
          array2.push(db.saveToUserReviewtableAsync(arr[i]));
        }
        Promise.all(array2)
          .then(() => {
            db.con.end();
          })
          .catch((error) => {
            console.log(error);
          });
      };
      dbInsertionToReview();
    })
    .catch((error) => {
      console.log(error);
    });
};

dbInsertionToRating();
