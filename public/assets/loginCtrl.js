angular.module('loginCtrl.runningApp',[])
    .controller('loginCtrl',['$scope',"$http", "$location", function($scope, $http, $location){
        $scope.greeting = "Woohoo!!!";
        $scope.login    = function(){
            var user    = {
                'name'      : $scope.username,
                'password'  : $scope.password
            };
            $http.post("/api/login", user)
            .then(function(response) {
                $scope.cookie = response.data;
                console.log($scope.cookie);
                $location.path("/main")
            }, function(response) {
                console.log("Error: " + response.data)
            });
            console.log(user);
        }
    }]);