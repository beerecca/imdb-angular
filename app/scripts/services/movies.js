'use strict';

/**
 * @ngdoc service
 * @name imdbAngularApp.Movies
 * @description
 * # Movies
 * Service in the imdbAngularApp.
 */
angular.module('imdbAngularApp')
  .service('Movies', function ($resource) {
    return $resource('http://apiimdb.azurewebsites.net/api/movies');
  });
