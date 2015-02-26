(function () {
    angular.module(appConfig.appName)
      .filter('paginate', ['Paginate', function (Paginate) {
          return function (input, rowsPerPage) {
              if (!input) {
                  return input;
              }
              if (rowsPerPage) {
                  Paginate.rowsPerPage = rowsPerPage;
              }
              Paginate.itemCount = input.length;

              return input.slice(parseInt(Paginate.page * Paginate.rowsPerPage), parseInt((Paginate.page + 1) * Paginate.rowsPerPage + 1) - 1);
          }
      }])

      .filter('forLoop', function () {
          return function (input, start, end) {
              input = new Array(end - start);
              for (var i = 0; start < end; start++, i++) {
                  input[i] = start;
              }
              return input;
          }
      })
    .filter('range', function () {
        return function (val, range) {
            range = parseInt(range);
            for (var i = 0; i < range; i++)
                val.push(i);
            return val;
        };
    });
})();
