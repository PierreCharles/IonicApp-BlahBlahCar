'Use Strict';
angular.module('App').controller('forgotController', function ($scope, $state, $cordovaOauth, $localStorage, $location, $http, $ionicPopup, $firebaseObject, Auth, FURL, Utils) {
        var ref = new Firebase(FURL);
        $scope.resetpassword = function (user) {
            if (angular.isDefined(user)) {
                Auth.resetpassword(user)
                    .then(function () {
                        $location.path('/login');
                    }, function (err) {
                    });
            }
        };
    }
);
