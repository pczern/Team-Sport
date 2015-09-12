angular.module('runningApp',[
    'ngMaterial',
    'ngRoute',
    'loginCtrl.runningApp'
    
])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/pLogin.html',
            controller: 'loginCtroller',
  
        })
        .when('/register', {
            templateUrl: 'views/pRegister.html',
            controller: 'registerController'
        });


  
    }

);