angular.module('runningApp',[
    'ngMaterial',
    'ngRoute',
    'ngMap',
    'mainCtrl.runningApp',
    'loginCtrl.runningApp',
    'registerCtrl.runningApp',
    "addeventCtrl.runningApp"
    
])

.config(function($routeProvider, $locationProvider) {
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

);