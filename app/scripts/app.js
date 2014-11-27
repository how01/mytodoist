'use strict';

/**
 * @ngdoc overview
 * @name myWorkspaceApp
 * @description
 * # myWorkspaceApp
 *
 * Main module of the application.
 */
angular
  .module('myWorkspaceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    /* custom module */
    'Book'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todolist', {
        templateUrl: 'books/books.html',
        controller:'myBookController'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
