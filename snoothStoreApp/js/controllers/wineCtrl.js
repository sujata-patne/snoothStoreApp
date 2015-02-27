(function () {
    angular.module(appConfig.appName)
    .controller('WinesCtrl', ['$scope', 'Wines', 'Paginate', function ($scope, Wines, Paginate) {
        var searchData = {
            'searchText': $scope.searchText,
            'maxPrice': parseInt($scope.maxPrice),
            'minPrice': parseInt($scope.minPrice),
            'type': $scope.type,
            'rank': $scope.rank,
            'available': $scope.available
        };
        Wines.getWines(searchData, function (wines) {
            $scope.wines = wines;

            $scope.wineList = [];
            while ($scope.wines.length > 0) {
                $scope.wineList.push($scope.wines.splice(0, 4));
            }
        });

        $scope.clearSearch = function () {
            $scope.searchText = null;
            $scope.maxPrice = null;
            $scope.minPrice = null;
            $scope.type = null;
            $scope.available = null;
            $scope.rank = null;
            $scope.searchWines();
        };
        $scope.parseInt = parseInt;
        $scope.searchWines = function () {
            var searchData = {
                'searchText': $scope.searchText,
                'maxPrice': parseInt($scope.maxPrice),
                'minPrice': parseInt($scope.minPrice),
                'type': $scope.type,
                'rank': $scope.rank,
                'available': $scope.available
            };
            //console.log(searchData);
            Wines.getWines(searchData, function (wines) {
                $scope.wines = wines;

                $scope.wineList = [];
                while ($scope.wines.length > 0) {
                    $scope.wineList.push($scope.wines.splice(0, 4));
                }
            });
        }
        $scope.paginator = Paginate;
        console.log($scope.paginator.pageCount())
    }]);
})();