'Use Strict';
angular.module('App').controller('profileController',
    function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

    var auth = Auth;
    $scope.items=auth;

    $scope.logOut = function() {
        if(angular.isDefined(auth.user)){
            auth.logout();
            $location.path('/login');
        }
    };

});

