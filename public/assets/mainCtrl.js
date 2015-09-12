angular.module('mainCtrl.runningApp',[])
    .controller('mainCtrl',['$scope',function($scope){
        $scope.message  = "I'm awesome!!!";
        $scope.map = { center: { latitude: 45, longitude: 6 }, zoom: 8 };
    }]);