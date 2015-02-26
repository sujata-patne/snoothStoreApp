(function () {
    angular.module(appConfig.appName)
    .directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating" ng-csp>'
            + '<li ng-repeat="star in stars" ng-class="star">'
            + '<i class="fa fa-star"></i>'
            + '</li>'
            + '</ul>',
            scope: {
                max: '=',
                ratingValue: '='
            },
            link: function (scope, elem, attr) {
                var updateStars = function () {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };
                
                scope.$watch('ratingValue', function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        }
    });
})();