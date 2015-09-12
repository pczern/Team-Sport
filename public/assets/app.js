angular.module('runningApp',[
    'ngMaterial',
    'ngRoute',
    'loginCtrl.runningApp',
    'registerCtrl.runningApp'
    
])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/pLogin.html',
            controller: 'loginCtrl',
  
        })
        .when('/register', {
            templateUrl: 'views/pRegister.html',
            controller: 'registerCtrl'
        });


  
    }

);