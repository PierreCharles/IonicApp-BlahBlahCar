angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory("Announces", function($firebaseArray) {
    var itemsRef = new Firebase("https://ionicapp-blahblahcar.firebaseio.com/Announces");
    return $firebaseArray(itemsRef);
});

