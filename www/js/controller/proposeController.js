'Use Strict';
angular.module('App').controller('proposeController', function ($scope, Announces, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup,
                                                                ionicTimePicker, ionicDatePicker,$cordovaGeolocation, Auth) {

   $scope.Announces = Announces;

   $scope.announces = {
        FromPlace: '',
        FromCountries: '',
        ToPlace:'',
        ToCountries:'',
        Highway:'',
        NumberOfPlace: '',
        Price:'',
        UserEmail:'',
        StartDate: '',
        Image: '',
        StartHour : ''
    };

    $scope.openDatePicker = function(){
        ionicDatePicker.openDatePicker(datePickerAnnounces);
    };

    $scope.openTimePicker = function() {
        ionicTimePicker.openTimePicker(timePickerAnnounces);
    };

   $scope.addAnnounces = function (isValid) {

       if (!isValid){
           this.showPopup("Failed","Failed to add an announces. You can insert data to all input !", false);
       }

       else{
           var regex = new RegExp("[ ,]+", "g");
           var start = $scope.announces.From.split(regex);
           var end = $scope.announces.To.split(regex);

           $scope.announces.FromPlace = start[0];
           $scope.announces.FromCountries = start[1];
           $scope.announces.ToPlace = end[0];
           $scope.announces.ToCountries = end[1];
           $scope.announces.UserEmail = Auth.user.auth.token.email;

           $scope.announces.Image = Auth.user.auth.token.image ? Auth.user.auth.token.image : "img/avatarDefault.png";

           $scope.Announces.$add($scope.announces);
           this.showPopup("Success","Announces added with success.", true);

           $scope.announces.From = '';
           $scope.announces.To = '';
           $scope.announces.Price='';
           $scope.announces.NumberOfPlace='';
           $scope.announces.StartDate='';
           $scope.announces.StartHour='';
           $scope.announces.Highway = false;
       }
   };

    $scope.showPopup = function(title, message, success) {
        var myPopup = $ionicPopup.show({
            title: title,
            subTitle: message,
            buttons: [
                {text: '<b>Ok</b>',type: 'button-positive',
                    onTap: function(e) {
                        if (success){
                            $state.go('menu.search');
                        } else {
                            return ;
                        }
                    }
                }
            ]
        });
    };

    $scope.disableTap = function(){
        container = document.getElementsByClassName('pac-container');
        // disable ionic data tab
        angular.element(container).attr('data-tap-disabled', 'true');
        // leave input field if google-address-entry is selected
        angular.element(container).on("click", function(){
            document.getElementById('searchBar').blur();
        });
    };

    var datePickerAnnounces = {
        callback: function (val) {
            var startDate = new Date(val);
            $scope.announces.StartDate =
                ("0"+(startDate.getDate())).slice(-2)
                +"/"+("0"+(startDate.getMonth()+1)).slice(-2)
                +"/"+startDate.getFullYear();
        },
        from: new Date(2015,1,1),
        to: new Date(2020, 1, 1),
        inputDate: new Date(),
        mondayFirst: true,
        disableDaysOfWeek: false,
        showTodayButton: false,
        closeOnSelect: true
    };

    var timePickerAnnounces = {
        callback: function (val) {
            if (typeof (val) === 'undefined') {
                alert("What is start time ?");
            } else {
                var selectedTime = new Date(val * 1000);
                $scope.announces.StartHour = ("0"+selectedTime.getUTCHours()).slice(-2)+":"+("0"+selectedTime.getUTCMinutes()).slice(-2);
            }
        },
        inputTime: 50400,
        format: 12,
        step: 15
    };

    //--------------- Geolocalisation -------------------------//

    $scope.currentLocalisation = function() {
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                console.log(position);
                var lat  = position.coords.latitude;
                var long = position.coords.longitude;

                $http({method: 'GET', url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&sensor=true'}).
                success(function(data, status, headers, config) {
                    var city = '';
                    var country = '';
                    var counting = 0;

                    console.log(data);
                    angular.forEach(data.results[0].address_components, function(object) {
                        if(counting==2){
                            city = object.long_name;
                        }
                        if(counting==5){
                            country = object.long_name;
                        }
                        counting = counting + 1;
                    });
                    $scope.announces.From = city+","+country;
                }).
                error(function(data, status, headers, config) {
                    alert("Error during getting the current location.")
                });

            }, function(err) {
                alert("Error during getting your current location.");
            });

    };


});
