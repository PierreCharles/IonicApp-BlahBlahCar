angular.module('App').factory("Announces", function(FURL, $firebaseArray) {
    var urlAnnounces = FURL+"Announces";
    var itemsRefAnnounces = new Firebase(urlAnnounces);
    return $firebaseArray(itemsRefAnnounces);
});

angular.module('App').factory("MyAnnounces", function(FURL, Auth, $firebaseArray) {

    var url = FURL+"Announces";
    var me = Auth.user.auth.token.email;
    var itemsRef = new Firebase(url);
    var myAnnounces = [];

    var query = itemsRef.on('value', function (snapshot) {
        var listAnnounces = snapshot.val();
        angular.forEach(listAnnounces, function (announces){
            if (announces.UserEmail==me){
                myAnnounces.push(announces);
            }
        })
    });
    return myAnnounces;
});
