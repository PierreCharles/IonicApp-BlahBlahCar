'Use Strict';
angular.module('App').controller('searchController', function ($scope, Announces, Auth) {

    $scope.items = Announces;
    $scope.input = {};

});