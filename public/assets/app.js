var app = angular.module('runningApp', [
    'ngMaterial',
    'ngRoute',
    'ngMap',
    'mainCtrl.runningApp',
    'loginCtrl.runningApp',
    'registerCtrl.runningApp'

])

.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/pLogin.html',
                controller: 'loginCtrl'

            })
            .when('/main', {
                templateUrl: 'views/pMain.html',
                controller: 'mainCtrl'

            })
            .when('/register', {
                templateUrl: 'views/pRegister.html',
                controller: 'registerCtrl'
            })
            .when("/addevent", {
                templateUrl: "views/pAddEvent.html",
                controller: "addeventCtrl.runningApp"
            })
            .when("/findevent", {
                templateUrl: "views/pFindEvent.html",
                controller: "findevent.runningApp"
            });



    }


).factory('types', function () {

    var types = ['Joggen', 'Rennen', 'Spazieren', 'Biken', 'Sudoku'];
    return types;
})
.service('coordinates', function () {
    var longitude = 0;
    var latitude = 0;
    var setCoordinates = function (long, lat) {
        longitude = long;
        latitude = lat;
    };

    var getLongitude = function () {
        return longitude;
    };

    var getLatitude = function () {
        return latitude;
    };
    return {
        getLongitude: getLongitude,
        getLatitude: getLatitude,
        setCoordinates: setCoordinates
    };

});