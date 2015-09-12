angular.module('loginCtrl.runningApp',[])
    .controller('loginCtrl',['$scope',function($scope){
        $scope.greeting = "Woohoo!!!";
        $scope.login    = function(){
            var user    = {
                'name'      : $scope.username,
                'password'  : $scope.password
            }
            console.log(user);
        }
    }]);