'Use Strict';
angular.module('App').controller('proposeController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

   // $scope.items = Announces;

    $scope.addItem = function() {
        var name = prompt("What do you need to buy?");
        if (name) {
            $scope.items.$add({
                "name": name
            });
        }
    };
    $scope.checkAccount = function() {
        //  $state.go('profile');
    };
});

