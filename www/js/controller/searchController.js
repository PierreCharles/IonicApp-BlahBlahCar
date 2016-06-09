'Use Strict';
angular.module('App').controller('searchController', function ($scope, Announces) {

    $scope.items = Announces;
    $scope.input = {};

});