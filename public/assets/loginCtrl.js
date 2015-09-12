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
              var data = JSON.parse(response.data);

              if(data.success === true)
                $location.path("/main")
              else
                alert(data.error);
            }, function(response) {
                alert(JSON.parse(response).error);
            });
        }
    }]);
