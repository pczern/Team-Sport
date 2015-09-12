angular.module('registerCtrl.runningApp', [])
  .controller('registerCtrl', ['$scope', "$http", "$location", function($scope, $http, $location) {
    $scope.greeting = "Woohoo2!!!";
    $scope.register = function() {
      var user = {
        'name': $scope.username,
        'email': $scope.email,
        'password': $scope.password
      };

      $http({
        method: 'POST',
        url: '/api/register',
        data: param(user),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function(response) {
          console.log(response.data);
          if (response.data.success === true)
            $location.path("/main")
          else
            alert(JSON.stringify(response.data.error));
        }, function(response) {
          console.log(response);
          alert(JSON.stringify(response.data.error));
        });
    }
  }]);

  function param(obj) {
  var query = '',
    name, value, fullSubName, subName, subValue, innerObj, i;

  for (name in obj) {
    value = obj[name];

    if (value instanceof Array) {
      for (i = 0; i < value.length; ++i) {
        subValue = value[i];
        fullSubName = name + '[' + i + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += param(innerObj) + '&';
      }
    } else if (value instanceof Object) {
      for (subName in value) {
        subValue = value[subName];
        fullSubName = name + '[' + subName + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += param(innerObj) + '&';
      }
    } else if (value !== undefined && value !== null)
      query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
  }

  return query.length ? query.substr(0, query.length - 1) : query;
};
