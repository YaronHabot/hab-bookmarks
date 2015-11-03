var habDbModule = angular.module('habDbModule', ['mongolabResourceHttp']);

habDbModule.constant('MONGOLAB_CONFIG',{API_KEY:'c01fLe30gB41CzEqN1SHsQlNxSAsCC09', DB_NAME:'hab_db'});
  
habDbModule.factory('habDB_bookmarks', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('hab_bookmarks'); 
});

habDbModule.factory('habDB_users', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('hab_users'); 
});