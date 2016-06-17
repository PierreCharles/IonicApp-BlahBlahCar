'Use Strict';
angular.module('App').controller('searchController', function ($scope, Announces, $state, $http) {

    $scope.items = Announces;

    console.log(Announces);
    console.log(Announces[0]);
    $scope.input = {};


    $scope.disableTap = function () {
        container = document.getElementsByClassName('pac-container');
        // disable ionic data tab
        angular.element(container).attr('data-tap-disabled', 'true');
        // leave input field if google-address-entry is selected
        angular.element(container).on("click", function () {
            document.getElementById('searchBar').blur();
        });
    };

    $scope.getAnnounceDetail = function(item){
        console.log(item);
        $state.go('announce-detail', {item:item});
    };


});