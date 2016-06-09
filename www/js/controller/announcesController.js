'Use Strict';
angular.module('App').controller('announcesController', function ($scope, MyAnnounces, Auth) {

    $scope.items = MyAnnounces;
    

    console.log(MyAnnounces);

});

