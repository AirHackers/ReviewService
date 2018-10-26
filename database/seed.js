var faker = require('faker');
var db =  require('./index.js');
var moment = require('moment');


function randNumber(num){
    return Math.floor((Math.random() * num) + 1);
}

for(var i = 0; i < 10; i++) {
    let rating = {
        numberOfReviews: randNumber(500),
        overallrate: randNumber(5),
        accuracy: randNumber(5),
        communication: randNumber(5),
        cleanliness: randNumber(5),
        location: randNumber(5),
        check_in: randNumber(5),
        value: randNumber(5)
    };
    db.saveToRatingtable(rating, (err) => {
        if(err){
            console.log("errrrrr");
            throw err;
        }
        
    });
}


for(var i = 0; i < 100; i++) {
    let userreview = {
        username: faker.internet.userName(),
        review: faker.lorem.sentences(),
        rateNumber: randNumber(5),
        createdAt: moment(faker.date.past()).fromNow().toString(),
        //report: faker.lorem.sentence(),
        roomID: randNumber(10),
        photo: faker.image.people(),
        report: faker.lorem.sentence()
    };
    db.saveToUserReviewtable(userreview, (err) => {
        if(err){
            console.log("errrrrr");
            throw err;
        }
    });

}



