var fs = require('fs');
var _ = require('lodash');

var catalog = JSON.parse(fs.readFileSync('beers.json'));

console.log(catalog);

exports.getBeerArray = function () {
    return Object.keys(catalog).map(function (id) {
        return _.extend({id: id}, catalog[id]);
    }).filter(function(beer) {
        return beer.votes > 0;
    });
};