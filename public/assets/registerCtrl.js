angular.module('registerCtrl.runningApp',[])
    .controller('registerCtrl',['$scope',function($scope){
        $scope.greeting = "Woohoo2!!!";
        $scope.register = function(){
            var user    = {
                'name'      : $scope.username,
                'email'     : $scope.email,
                'password'  : $scope.password
            }
            console.log(user);
        }
    }]);