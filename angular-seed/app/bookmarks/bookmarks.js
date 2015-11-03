'use strict';

var habModule = angular.module('myApp.bookmarks', ['ngRoute', 'habDbModule']);

habModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookmarks', {
    templateUrl: 'bookmarks/bookmarks.html',
    controller: 'bookmarksCtrl'
  });
}]);

habModule.controller('bookmarksCtrl',['$scope', '$rootScope', '$location','habDB_bookmarks', function($scope, $rootScope,$location, habDB_bookmarks) {
    if (typeof($rootScope.user) == 'undefined')
        $location.path('/login');
        
    $scope.user.name = $rootScope.user.name;
    
    habDB_bookmarks.query({"user":$rootScope.user.name}).then(
        function(dbCollections){
          var found = dbCollections.length > 0;
          if (found)
          {
              $scope.bookmarks = dbCollections[0].bookmarks;
              $scope.databaseMessage = '';
            //alert("found bookmarks");
          }
          else
          {
            //alert("Login for user " + $scope.user.name + " failed. Either name or password is incorrect." );
            $scope.databaseMessage = 'No bookmarks were found.';
          }
        },
        function(error){
            console.log("Failed to access the database, result is " + error);
        }
    );
 
}]);

