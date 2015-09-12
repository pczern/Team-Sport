angular.module('mainCtrl.runningApp', [])
    .controller('mainCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
        $scope.positions = [];
        $scope.showAdvanced = function (ev) {
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'views/addEvent.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                    .then(function (answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function () {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };
            $scope.message = "I'm awesome!!!";
            var map;
            $scope.$on('mapInitialized', function (evt, evtMap) {
                map = evtMap;
                var event;
                $scope.placeMarker = function (e) {
                    event = e;
                    var marker = new google.maps.Marker({
                        position: e.latLng,
                        map: map
                    });
                    map.panTo(e.latLng);
                    $scope.showAdvanced(event);
                }
            });
        
       
  

        
        
          $scope.showSearch = function(ev) {
        $mdDialog.show({
            controller: dialogCtrl,
            templateUrl: 'views/pFindEvent.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(searchText) {
            $scope.status = 'You said the information was "' + searchText + '".';
            console.log(searchText);
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
      };


            
    }]);


        function DialogController($scope, $mdDialog, types) {
            
              $scope.myDate = new Date();
      $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth(),
        $scope.myDate.getDate());
      $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth(),
        $scope.myDate.getDate() + 7);
            $scope.list = types;
            $scope.hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
            $scope.minutes = [0, 15, 30, 45];
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }





      
   

function dialogCtrl($scope, $mdDialog, types) {
    $scope.list = types;

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide($scope.searchText);
  };
};

