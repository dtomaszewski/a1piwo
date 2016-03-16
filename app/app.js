angular.module('topbeer.app', ['beer', 'vote'])
    .controller('MainCtrl', function (Beer) {
        var vm = this;

        vm.beers = Beer.getList();

        vm.likeBeer = function(beer) {
            Beer.like(beer);
        };

        vm.unlikeBeer = function(beer) {
            Beer.unlike(beer);
        };
    });