'use strict';

// describe('myApp.edit module', function() {

//   beforeEach(module('myApp.edit'));

//   describe('edit controller', function(){

//     it('should ....', inject(function($controller) {
//       //spec body
//       var editCtrl = $controller('editCtrl');
//       expect(editCtrl).toBeDefined();
      
      
//     }));

//   });
// });

describe('editCtrl', function() {
    var scope, createController;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('NavCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();
        $rootScope.user = {
              "name" : 'yaron',
              "role" : 1
            };
        
        //expect(scope.isActive('/about')).toBe(true);
        //expect(scope.isActive('/contact')).toBe(false);
    });
});