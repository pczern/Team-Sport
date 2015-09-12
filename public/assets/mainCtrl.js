
angular.module('mainCtrl.runningApp',[])
    .controller('mainCtrl',['$scope', '$mdDialog',function($scope, $mdDialog){
        $scope.message  = "I'm awesome!!!";
       $scope.map = { center: { latitude: 51, longitude: 7 }, zoom: 10 };
        $scope.showSearch = function(ev) {
        $mdDialog.show({
            controller: dialogCtrl,
            templateUrl: 'views/pFindEvent.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(searchText) {
            $scope.status = 'You said the information was "' + searchText + '".';
            console.log(searchText);
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
      };
    }]);

function dialogCtrl($scope, $mdDialog, types) {
    $scope.list = types;

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide($scope.searchText);
  };
};
