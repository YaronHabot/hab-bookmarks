'use strict';

describe('loginCtrl', function() {
    beforeEach(module('myApp.login'));
    
    var $controller;  

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    })); 
  
    it('should pass' , function() {
        expect(true).toBeTruthy();  
    })
    // var scope, createController;

    // beforeEach(inject(function ($rootScope, $controller) {
    //     scope = $rootScope.$new();

    //     createController = function() {
    //         return $controller('LoginCtrl', {
    //             '$scope': scope 
    //         });
    //     };
    // }));

    // it('should have a method to check if the path is active', function() {
    //     var controller = createController();
    //     $rootScope.user = {
    //           "name" : 'yaron',
    //           "role" : 1
    //         };
        
    //     //expect(scope.isActive('/about')).toBe(true);
    //     //expect(scope.isActive('/contact')).toBe(false);
    // });
});