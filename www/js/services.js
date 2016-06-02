angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory("Value", function($firebaseArray) {
    var itemsRef = new Firebase("https://ionicapp-blahblahcar.firebaseio.com/test123");
    return $firebaseArray(itemsRef);
});

