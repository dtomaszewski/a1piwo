angular.module('beer', ['firebase'])
    .factory('Beer', function($firebaseArray, $firebaseObject, Firebase) {

        var firebaseRef = new Firebase('https://bestbeer.firebaseio.com/beers');
        var beerList;

        function getBeers() {
            var fbRef = firebaseRef.orderByChild('votes');
            beerList = $firebaseArray(fbRef);
            return beerList;
        }

        function likeBeer(beer) {
            beer.votes = beer.votes + 1;
            beerList.$save(beer);
        }

        function unlikeBeer(beer) {
            beer.votes = beer.votes - 1;
            beerList.$save(beer);
        }

        return {
            getList: getBeers,
            like: likeBeer,
            unlike: unlikeBeer
        }
    });