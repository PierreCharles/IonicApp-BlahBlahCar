'Use Strict';
angular.module('App').controller('announcesController', function ($scope, MyAnnounces,$state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

    console.log(Auth.user.uid);
    console.log(MyAnnounces);

    $scope.items = MyAnnounces;

});

