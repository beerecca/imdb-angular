'use strict';

/**
 * @ngdoc overview
 * @name imdbAngularApp
 * @description
 * # imdbAngularApp
 *
 * Main module of the application.
 */
angular
  .module('imdbAngularApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
