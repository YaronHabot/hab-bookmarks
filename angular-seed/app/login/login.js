'use strict';

var loginModule = angular.module('myApp.login', ['ngRoute','ngMessages', 'habDbModule']);

loginModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}]);

loginModule.controller('LoginCtrl',['$scope', '$rootScope','$location','habDB_users', function($scope, $rootScope, $location ,habDB_users) {
    
    $scope.user = {};
    //Comment out when done testing
    $scope.user = {
      "name" : "yaron",
      "pwd" : "yaron"
    }
    
     // function to submit the form after all validation has occurred            
    $scope.submitForm = function() {
      
      var authenticated = habDB_users.query({"name":$scope.user.name, "password":$scope.user.pwd}).then(
        function(dbCollections){
          var authenticated = dbCollections.length > 0;
          if (authenticated)
          {
            $rootScope.user = {
              "name" : dbCollections[0].name,
              "role" : dbCollections[0].role
            };
            $location.path('/bookmarks');
          }
          else
          {
            alert("Login for user " + $scope.user.name + " failed. Either name or password is incorrect." );
          }
        },
        function(error){
            console.log("Failed to get all users, result is " + error);
        }
      );

    };
}]);