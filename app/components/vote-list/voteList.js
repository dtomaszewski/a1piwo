angular.module('vote', [])
    .directive('voteList', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/vote-list/vote-list.tmpl.html',
            scope: {
                items: '=',
                like: '=',
                unlike: '='
            },
            controller: function($scope) {
                this.action = function(like, item) {
                    if (like) {
                        $scope.like(item);
                    } else {
                        $scope.unlike(item);
                    }
                };
            }
        }
    });
