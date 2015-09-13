angular.module('loginCtrl.runningApp', [])
  .controller('loginCtrl', ['$scope', "$http", "$location", '$cookies', function($scope, $http, $location, $cookies) {
    var userCookie = $cookies.get('currentUser');

    if (userCookie != null) {
      userCookie = JSON.parse(userCookie.substring(2));
      if (typeof userCookie._id === 'string')
        $location.path('/main');
    }

    $scope.greeting = "Woohoo!!!";
    $scope.login = function() {
      var user = {
        'name': $scope.username,
        'password': $scope.password
      };
      $http({
        method: 'POST',
        url: '/api/login',
        data: param(user),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function(response) {
        if (response.data.success === true) {
          $location.path("/main");
          $rootScope.cookie = response.data.cookie;
        } else {
          alert(response.data.error);
        }
      }, function(response) {
        alert(response.data.error);
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
