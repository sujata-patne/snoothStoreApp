(function () {
    angular.module(appConfig.appName)
      .directive('paginate', function factory() {
          return {
              restrict: 'E',
              templateUrl: 'views/paginationControl.html'
          };
      });
})