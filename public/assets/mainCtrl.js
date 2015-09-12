angular.module('mainCtrl.runningApp', [])
    .controller('mainCtrl', ['$scope', '$mdDialog', "$http", "$rootScope", "coordinates", function ($scope, $mdDialog, $http, $rootScope, coordinates) {
        $http.get("/api/find/events")
        .then(function(response) {
            $scope.locs = response.data;
            console.log(response.data);
        }, function(response) {
            console.log("Error: " + response.data);
        });
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
                        var marker = new google.maps.Marker({
                            position: {K: coordinates.getLongitude(), G: coordinates.getLatitude()},
                            map: $scope.map
                        });
                            
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };
        $scope.message = "I'm awesome!!!";
        var map;
                      var event;
        $scope.$on('mapInitialized', function (evt, evtMap) {
                map = evtMap;
               
                $scope.placeMarker = function (e) {
                    console.log(e.latLng);
     
                    coordinates.setCoordinates(e.latLng.K, e.latLng.G);
                    $scope.map = map;
                        event = e;
                        $scope.showAdvanced(event);

            
                    };

        });
        $scope.message = "I'm awesome!!!";


      



        $scope.showSearch = function (ev) {
            $mdDialog.show({
                    controller: dialogCtrl,
                    templateUrl: 'views/pFindEvent.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                .then(function (searchText) {
                    $scope.status = 'You said the information was "' + searchText + '".';
                    console.log(searchText);
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };



    }]);

function getArrayWithoutLastLocation(scope) {
    return scope.positions.map(function (element) {
        if (!(scope.lastLocation === element))
            return true;
    });

}

function DialogController($scope, $mdDialog, $http, $rootScope, types, coordinates) {
$scope.timespan = 10;
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
    $scope.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
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

    $scope.addPin = function() {
        $scope.eventz = {
            type: $scope.type,
            name: $scope.place,
            description: $scope.user.biography,
            start: $scope.minDate,
            end: $scope.maxDate,
            people: [1],
            x: coordinates.getLongitude(),
            y: coordinates.getLatitude()
        }
        $http.post('api/add/event', $scope.eventz)
        .then(function(response) {
            console.log(response);    
        });
        
        console.log(coordinates.getLongitude());
        console.log(coordinates.getLatitude());
       /* $http.post("api/add/event", $rootScope)
        .then(function(response) {

        })*/
    }
}








function dialogCtrl($scope, $mdDialog, types) {
    $scope.list = types;

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide($scope.searchText);
    };
};