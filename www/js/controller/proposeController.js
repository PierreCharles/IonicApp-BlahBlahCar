'Use Strict';
angular.module('App').controller('proposeController', function ($scope, Announces, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, ionicTimePicker, ionicDatePicker, Auth) {

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
        StartHour : ''
    };

    $scope.openDatePicker = function(){
        ionicDatePicker.openDatePicker(datePickerAnnounces);
    };

    $scope.openTimePicker = function() {
        ionicTimePicker.openTimePicker(timePickerAnnounces);
    };

   $scope.addAnnounces = function (isValid) {

       if (!isValid) this.showPopup("Failed","Failed to add an announces. You can insert data to all input !", false);

       var regex = new RegExp("[ ,]+", "g");
       var start = $scope.announces.From.split(regex);
       var end = $scope.announces.To.split(regex);

       $scope.announces.FromPlace = start[0];
       $scope.announces.FromCountries = start[1];
       $scope.announces.ToPlace = end[0];
       $scope.announces.ToCountries = end[1];
       $scope.announces.UserEmail = Auth.user.auth.token.email;

       $scope.Announces.$add($scope.announces);
       this.showPopup("Success","Announces added with success.", true);

       $scope.announces.From = '';
       $scope.announces.To = '';
       $scope.announces.Price='';
       $scope.announces.NumberOfPlace='';
       $scope.announces.StartDate='';
       $scope.announces.StartHour='';
       $scope.announces.Highway = false;
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

    var datePickerAnnounces = {
        callback: function (val) {
            var startDate = new Date(val);
            $scope.announces.StartDate = (startDate.getUTCDate()+1)+"/"+("0"+(startDate.getMonth()+1)).slice(-2)+"/"+startDate.getFullYear();
        },
        from: new Date(2016, 1, 1),
        to: new Date(2020, 1, 1),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [0],
        closeOnSelect: true,
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
        step: 15,
    };



});
