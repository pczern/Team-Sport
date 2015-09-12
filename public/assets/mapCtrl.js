//out of use//

angular.module('ngApp',[])
.controller('EventArgumentsCtrl', function($scope) {
  var map;
  $scope.$on('mapInitialized', function(evt, evtMap) {
    map = evtMap;
    $scope.placeMarker = function(e) {
      var marker = new google.maps.Marker({position: e.latLng, map: map});
      map.panTo(e.latLng);
    }
  });
});