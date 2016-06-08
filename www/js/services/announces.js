angular.module('App').factory("Announces", function(FURL, $firebaseArray) {
    var url = FURL+"Announces";
    var itemsRef = new Firebase(url);
    return $firebaseArray(itemsRef);
})