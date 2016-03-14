var Firebase = require('firebase');
var beers = require('./beers');

var fbRef = new Firebase('https://bestbeer.firebaseio.com/beers');
beers.getBeerArray().forEach(function(beer) {
    fbRef.child(beer.id).set({
        photo: beer.photo,
        name: beer.name,
        votes: beer.votes
    });
});