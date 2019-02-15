    /*@flow*/

    var angular = require('angular');
    var myApp = angular.module('myApp',['myApp.Users']);

    myApp.run(($rootScope:Object) => {
        $rootScope.developerName = 'Swapnil';
        $rootScope.appName = 'Prototype - Merchant onboarding';
    });

    myApp.controller('mainController',($scope:Object) => {
        $scope.titleText = 'Merchant Onboarding';
        $scope.showMessage = function() {
            alert('hello world');
        };
        $scope.getName = function (name:string):string{
            return name;
        };
    });

    require('./modules/userModule');
