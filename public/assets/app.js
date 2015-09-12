angular.module('runningApp',[
    'ngMaterial',
    'ngRoute',
    'mainCtrl.runningApp',
    'loginCtrl.runningApp',
    'registerCtrl.runningApp'
    
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
        });


  
    }

);