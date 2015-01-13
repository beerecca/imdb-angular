'use strict';

/**
 * @ngdoc directive
 * @name imdbAngularApp.directive:movieDetails
 * @description
 * # movieDetails
 */
angular.module('imdbAngularApp')
  .directive('movieDetails', function () {
    return {
      templateUrl: 'views/details-partial.html',
      restrict: 'E'
    };
  });
