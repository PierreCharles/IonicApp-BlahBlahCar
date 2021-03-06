'Use Strict';
angular.module('App').controller('profileController', function ($scope, $cordovaCamera, $location, Auth, FURL) {

    var auth = Auth;
    $scope.user_email = auth.user.auth.token.email;
    $scope.imgURI = auth.user.auth.token.image ? auth.user.auth.token.image : "img/avatarDefault.png";

    $scope.logOut = function () {
        if (angular.isDefined(auth.user)) {
            auth.logout();
            $location.path('/login');
        }
    };

    $scope.takePhoto = function () {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
        $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            auth.updateImage($scope.imgURI);

        }, function (err) {
            // An error occured. Show a message to the user
        });
    };

    $scope.choosePhoto = function () {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            auth.updateImage($scope.imgURI);

        }, function (err) {
            // An error occured. Show a message to the user
        });
    };
});





