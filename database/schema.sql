 
DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

USE reviews;
 
create table rating (
    ID int unsigned not null auto_increment,
    numberOfReviews int, 
    overallrate int, 
    accuracy int, 
    communication int, 
    cleanliness int, 
    location int, 
    check_in int, 
    value int, 
    PRIMARY KEY (ID)
);


create table userReview (
    ID int unsigned not null auto_increment,
    report text,
    photo text, 
    username text not null,
    review text not null, 
    rateNumber smallint,
    createdAt text,
    homeID int unsigned not null,
    PRIMARY KEY (ID),
    FOREIGN KEY (homeID) REFERENCES rating(ID)
);


