angular.module('mainCtrl.runningApp',[])
    .controller('mainCtrl',['$scope',function($scope){
        $scope.message  = "I'm awesome!!!";
        $scope.map = { center: { latitude: 51, longitude: 7 }, zoom: 10 };
    }]);