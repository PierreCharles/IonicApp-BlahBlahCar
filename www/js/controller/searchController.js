'Use Strict';
angular.module('App').controller('searchController', function ($scope, Announces, Auth) {

    $scope.items = Announces;
    $scope.input = {};

    $scope.disableTap = function(){
        container = document.getElementsByClassName('pac-container');
        // disable ionic data tab
        angular.element(container).attr('data-tap-disabled', 'true');
        // leave input field if google-address-entry is selected
        angular.element(container).on("click", function(){
            document.getElementById('searchBar').blur();
        });
    };

});