'Use Strict';
angular.module('App').controller('announcesController', function ($scope, Announces,$state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

    $scope.items = Announces;

    $scope.checkAccount = function() {
        // $state.go('profile');
    };
});

