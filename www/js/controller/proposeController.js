'Use Strict';
angular.module('App').controller('proposeController', function ($scope, Announces, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

   $scope.items = Announces;
   console.log(Auth);

   $scope.addAnnounces = function (infodata) {
       $scope.value = infodata;
       console.log($scope.value);
       console.log(Auth.user.uid);
       if($scope.value){
           $scope.items.$add({
               "DateHourStart" : $scope.value.DateHourStart,
               "DateHourReturn": $scope.value.DateHourReturn,
               "From": $scope.value.From,
               "Highway": $scope.value.Highway,
               "NumberOfPlace": $scope.value.NumberOfPlace,
               "Price": $scope.value.Price,
               "RoundTrip": $scope.value.RoundTrip,
               "To": $scope.value.To,
               "UserId": Auth.user.uid
           });
       }
   };


});
