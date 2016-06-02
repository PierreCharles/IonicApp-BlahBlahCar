angular.module('app.controllers', [])
  
.controller('searchCtrl', function($scope, $state) {
    $scope.checkAccount = function() {
        $state.go('profile');
    };
})

.controller('proposeARideCtrl', function($scope, Announces, $state) {

    $scope.items = Announces;

    $scope.addItem = function() {
        var name = prompt("What do you need to buy?");
        if (name) {
            $scope.items.$add({
                "name": name
            });
        }
    };
    $scope.checkAccount = function() {
        $state.go('profile');
    };
})
      
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})

.controller("announcesCtrl", function($scope, Value, $state) {
    $scope.items = Value;

    $scope.checkAccount = function() {
        $state.go('profile');
    };

});



