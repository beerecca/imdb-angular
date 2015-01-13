'use strict';

/**
 * @ngdoc function
 * @name imdbAngularApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the imdbAngularApp
 */
angular.module('imdbAngularApp')
  .controller('NavigationCtrl', function ($scope, $location) {

    $scope.navClass = function(page) {
      var current = $location.path().substring(1);
      return page === current ? 'active' : '';
    };

  });
