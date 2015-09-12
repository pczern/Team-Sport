angular.module('mainCtrl.runningApp',[])
    .controller('mainCtrl',['$scope',function($scope){
        $scope.message  = "I'm awesome!!!";
        $scope.map = { center: { latitude: 24, longitude: 0 }, zoom: 8 };
    }]);