(function () {
    angular.module(appConfig.appName)
    .service('Wines', ['$http', function ($http) {
        var service = {};

        service.getWines = function (searchData, success) {
            var queryStr = '';
            if (searchData.searchText !== undefined && searchData.searchText !== null && searchData.searchText !== '') {
                queryStr += '&q=' + searchData.searchText;
            }
            if (searchData.type !== undefined && searchData.type !== null && searchData.type !== '') {
                queryStr += '&t=' + searchData.type;
            }
            if (searchData.maxPrice != undefined && searchData.maxPrice !== null && searchData.maxPrice !== '' && !isNaN(searchData.maxPrice)) {
                queryStr += '&xp=' + searchData.maxPrice;
            }
            if (searchData.minPrice !== undefined && searchData.minPrice !== null && searchData.minPrice !== '' && !isNaN(searchData.minPrice)) {
                queryStr += '&mp=' + searchData.minPrice;
            }
            if (searchData.rank !== undefined && searchData.rank !== null && searchData.rank !== '' && searchData.rank === true) {
                queryStr += '&s=sr';
            }
            if (searchData.available !== undefined && searchData.available !== null && searchData.available !== '' && searchData.available === true) {
                queryStr += '&a=1';
            } else {
                queryStr += '&a=0';
            }
            //console.log(queryStr)
            $http.get('http://api.snooth.com/wines/?akey=mi8v17gunq6ljj88xq3260ir398jg1iqto10gn50ka7f73xi&ip=66.28.234.115&n=100' + queryStr)
            .success(function (data) {
                //console.log(data);
                success(data.wines);
            })
        }
        return service;
    }]);
})();