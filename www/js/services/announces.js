angular.module('App').factory("Announces", function(FURL, $firebaseArray) {
    var url = FURL+"Announces";
    var itemsRef = new Firebase(url);
    return $firebaseArray(itemsRef);
})

angular.module('App').factory("MyAnnounces", function(FURL, Auth, $firebaseArray) {
    var url = FURL+"Announces";
    var itemsRef = new Firebase(url);
    itemsRef.orderByChild("UserId").equalTo(Auth.user.uid).on("child_added", function(snapshot) {
        console.log(snapshot.key());
    });
    return $firebaseArray(itemsRef);
})

