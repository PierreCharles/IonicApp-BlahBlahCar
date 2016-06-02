angular.module('app.controllers', [])
  
.controller('searchCtrl', function($scope) {

})
   
.controller('announcesCtrl', function($scope) {

})
   
.controller('proposeARideCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('profilCtrl', function($scope) {

})

.controller("announcesCtrl", function($scope, Value) {
    $scope.items = Value;
    $scope.addItem = function() {
        var name = prompt("What do you need to buy?");
        if (name) {
            $scope.items.$add({
                "name": name
            });
        }
    };
})



