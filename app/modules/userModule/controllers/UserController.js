//@flow

import userModule from './../userModule';

userModule.controller('usersController', ['$scope',function($scope:Object) {
    $scope.title = 'Prototype';
    $scope.message = 'Hello world';
}]);
