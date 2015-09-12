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
