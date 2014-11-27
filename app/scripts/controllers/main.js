'use strict';

/**
 * @ngdoc function
 * @name myWorkspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myWorkspaceApp
 */
angular.module('myWorkspaceApp')
  .controller('MainCtrl', 
  	['$scope','$rootScope',function ($scope,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    

  }]);
