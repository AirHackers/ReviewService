const faker = require('faker');
const moment = require('moment');
const db = require('./index.js');

var res;
function randNumber(num) {
  return Math.floor((Math.random() * num) + 1);
}

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
  db.saveToRatingtable(rating, (err, result) => {
    if (err) {
      console.log('errrrrr');
      throw err;
    }
    res = result.insertId;
    for (let j = 0; j < 10; j += 1) {
      const userreview = {
        username: faker.internet.userName(),
        review: faker.lorem.sentences(),
        rateNumber: randNumber(5),
        createdAt: moment(faker.date.past()).fromNow().toString(),
        // report: faker.lorem.sentence(),
        homeID: res,
        photo: faker.image.avatar(),
        report: faker.lorem.sentence(),
      };
      db.saveToUserReviewtable(userreview, (err, res) => {
        if (err) {
          console.log('HERE ERRRRRR');
          throw err;
        }
      });
    }
  });

}



