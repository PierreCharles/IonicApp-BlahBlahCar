angular.module('App').factory("Announces", function(FURL, $http, $firebaseArray) {

    var urlAnnounces = FURL+"Announces";
    var itemsRefAnnounces = new Firebase(urlAnnounces);
    var customAnnounce = [];
    var urlGoogleApi = "https://maps.googleapis.com/maps/api/distancematrix/json?";
    var keyGoogleApi = "&key=AIzaSyD9UYunuJnrE3KXr392Q0PdMqgkSKu3Vfg";

    var query = itemsRefAnnounces.on('value', function (snapshot) {
        var listAnnounces = snapshot.val();
        angular.forEach(listAnnounces, function (announce){
            $http.get(urlGoogleApi+"origins="+announce.From+"&destinations="+announce.To+keyGoogleApi)
                .success(function(data, status, headers,config){
                    announce['Distance'] = data.rows[0].elements[0].distance.text;
                    announce['Time'] = data.rows[0].elements[0].duration.text;
                })
                .error(function(data, status, headers,config){
                    console.log('data error', status, headers, config);
                })
                .then(function(result){
                    things = result.data;
                });
            customAnnounce.push(announce);
        })
    });

    return customAnnounce;
});

angular.module('App').factory("MyAnnounces", function(FURL, Auth, $http, $firebaseArray) {

    var url = FURL+"Announces";
    var me = Auth.user.auth.token.email;
    var itemsRef = new Firebase(url);
    var myAnnounces = [];
    var urlGoogleApi = "https://maps.googleapis.com/maps/api/distancematrix/json?";
    var keyGoogleApi = "&key=AIzaSyD9UYunuJnrE3KXr392Q0PdMqgkSKu3Vfg";

    var query = itemsRef.on('value', function (snapshot) {
        var listAnnounces = snapshot.val();
        angular.forEach(listAnnounces, function (announce){
            if (announce.UserEmail==me){

                $http.get(urlGoogleApi+"origins="+announce.From+"&destinations="+announce.To+keyGoogleApi)
                    .success(function(data, status, headers,config){
                        announce['Distance'] = data.rows[0].elements[0].distance.text;
                        announce['Time'] = data.rows[0].elements[0].duration.text;
                    })
                    .error(function(data, status, headers,config){
                        console.log('data error', status, headers, config);
                    })
                    .then(function(result){
                        things = result.data;
                    });

                myAnnounces.push(announce);
            }
        })
    });
    return myAnnounces;
});
