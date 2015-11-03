'use strict';

angular.module('myApp.edit', ['ngRoute', "xeditable", 'habDbModule'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit', {
    templateUrl: 'edit/edit.html',
    controller: 'editCtrl'
  });
}])

.controller('editCtrl',['$scope', '$rootScope', '$location','habDB_bookmarks', function($scope, $rootScope,$location, habDB_bookmarks) {
  if (typeof($rootScope.user) == 'undefined')
  {
        $location.path('/login');
        return;
  }     
    $scope.user.name = $rootScope.user.name;
    
    habDB_bookmarks.query({"user":$rootScope.user.name}).then(
        function(dbCollections){
          var found = dbCollections.length > 0;
          if (found)
          {
              $scope.userData = dbCollections[0];
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
 
  $scope.saveBookmark = function(data, title) {
    var saveNewBookmark = title == null;
    if (saveNewBookmark) {
      $scope.inserted.id = data.title+'_'+Date();
      $scope.inserted.url = data.link;
      $scope.inserted.alt = data.title;
      $scope.inserted.imgsrc = data.imgsrc;
      //alert ('Saving. Data= '+data+' title='+title+Date());
    }
    
    $scope.userData.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError);
  };

  $scope.removeBookmark = function(index)  {
    //alert('remoev. index='+index);
    if (typeof($scope.bookmarks) == 'undefined' || $scope.bookmarks == null || index < 0 || index >= $scope.bookmarks.length  )
      return;
      
    $scope.bookmarks.splice(index);
    $scope.userData.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError);
  }
  
  $scope.addBookmark = function() {
    $scope.inserted = {
      "id": null,
      "url": null,
      "alt": null,
      "imgsrc" : null
    };
    $scope.bookmarks.push($scope.inserted);
  };
  
  $scope.testSave = function() {

    $scope.addBookmark();
  
    var data = {
      "link" : "http://test.com",
      "title" : "Test",
      "imgsrc" : "test.png"
    };
    
    //$scope.saveBookmark(data,null);
  };
  
  var changeSuccess = function() {
      alert("Bookmark saved successfuly");
  };
    
  var changeError = function() {
      alert("Bookmarked failed to save");
  };
}]);