angular.module('vote')
    .directive('voteBox', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/vote-box/vote-box.tmpl.html',
            scope: {
                item: '='
            },
            controller: function($scope) {
                this.item = $scope.item;
            }
        }
    });