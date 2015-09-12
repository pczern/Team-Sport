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


        function DialogController($scope, $mdDialog) {
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

