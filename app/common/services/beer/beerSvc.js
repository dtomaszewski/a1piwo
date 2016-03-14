angular.module('beer', ['firebase'])
    .factory('Beer', function($firebaseArray, $firebaseObject, Firebase) {

        var firebaseRef = new Firebase('https://bestbeer.firebaseio.com/beers');

        function getBeers() {
            var fbRef = firebaseRef.orderByChild('votes');
            return $firebaseArray(fbRef);
        }

        function likeBeer(beer) {
            beer.votes = beer.votes + 1;
        }

        function unlikeBeer(beer) {
            beer.votes = beer.votes - 1;
        }

        return {
            getList: getBeers,
            like: likeBeer,
            unlike: unlikeBeer
        }
    });