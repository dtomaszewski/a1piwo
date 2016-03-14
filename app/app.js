angular.module('topbeer.app', ['beer', 'vote'])
    .controller('MainCtrl', function (Beer) {
        var vm = this;

        vm.beers = Beer.getList();

        vm.likeBeer = function(beer) {
            Beer.like(beer);
            vm.beers.$save(beer);
        };

        vm.unlikeBeer = function(beer) {
            Beer.unlike(beer);
            vm.beers.$save(beer);
        };
    });