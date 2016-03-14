angular.module('vote')
    .directive('voteButton', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/vote-button/vote-button.tmpl.html',
            transclude: true,
            scope: {
                like: '@'
            },
            require: ['^^voteList', '^^voteBox'],
            link: function(scope, element, attrs, controllers) {
                scope.action = function() {
                    controllers[0].action(scope.like, controllers[1].item);
                }
            }
        }
    });