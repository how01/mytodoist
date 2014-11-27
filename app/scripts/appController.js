'use strict';

/**
 * @ngdoc overview
 * @name myWorkspaceApp
 * @description
 * # myWorkspaceApp
 *
 * Main module of the application.
 */
angular.module('myWorkspaceApp')
  .controller('appController',['$scope','$rootScope','$location',
    function($scope,$rootScope,$location){
      $rootScope.$on('$routeChangeSuccess', function(){
        if ( $location.path() === '/login'){
          $rootScope.showHeader = false;
          $('body').addClass('login-ctrl');
        }
        else{
          $rootScope.showHeader = true;
        }
      }); 
    }]);