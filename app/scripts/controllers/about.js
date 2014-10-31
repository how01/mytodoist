'use strict';

/**
 * @ngdoc function
 * @name myWorkspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myWorkspaceApp
 */
angular.module('myWorkspaceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
