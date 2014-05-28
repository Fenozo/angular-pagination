

angular


    .module('app', ['angularPagination'])


    .controller('AppController', function($scope, Pagination) {
        var pagination = $scope.pagination = Pagination.create({
            itemsPerPage: 10,
            itemsCount: 100,
            maxNumbers: 5
        });

        pagination.onChange = function(page) {
            console.info('page=', page);
        };

        pagination.setCurrent(1);
    })
