angular.module('app.controllers', [])
    
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
      //  $state.go('profile');
    };
})


.controller("announcesCtrl", function($scope, Announces, $state) {

    $scope.items = Announces;

    $scope.checkAccount = function() {
       // $state.go('profile');
    };

});



