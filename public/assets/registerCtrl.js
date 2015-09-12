angular.module('registerCtrl.runningApp',[])
    .controller('registerCtrl',['$scope',function($scope){
        $scope.greeting = "Woohoo2!!!";
        $scope.register = function(){
            var user    = {
                'name'      : $scope.username,
                'email'     : $scope.email,
                'password'  : $scope.password
            };
            $http.post("/api/register", user)
            .then(function(response) {;
                console.log(response.data);
                $location.path("/main")
            }, function(response) {
                console.log("Error: " + response.data)
            });
            console.log(user);
        }
    }]);