'Use Strict';
angular.module('App').controller('proposeController', function ($scope, Announces, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

   $scope.items = Announces;
   console.log(Auth);

   $scope.addAnnounces = function (infodata) {
       $scope.value = infodata;
       console.log($scope.value);
       console.log(Auth.user.uid);
       console.log($scope.value.DateHourStart)
       if($scope.value){
           $scope.items.$add({
               "DateHourStart" : $scope.value.DateHourStart.toString(),
               "From": $scope.value.From,
               "Highway": $scope.value.Highway,
               "NumberOfPlace": $scope.value.NumberOfPlace,
               "Price": $scope.value.Price,
               "To": $scope.value.To,
               "UserId": Auth.user.uid
           });
           this.showPopup("Success","Announces added with success.", true);
       }
       else{
           this.showPopup("Failed","Failed to add an announces.", false);
       }
   };

    $scope.showPopup = function(title, message, success) {
        var myPopup = $ionicPopup.show({
            title: title,
            subTitle: message,
            buttons: [
                {text: '<b>Ok</b>',type: 'button-positive',
                    onTap: function(e) {
                        if (success){
                            $state.go('menu.search');
                        } else {
                            return ;
                        }
                    }
                }
            ]
        });
    };


});
