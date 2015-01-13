'use strict';

/**
 * @ngdoc service
 * @name imdbAngularApp.Genres
 * @description
 * # Genres
 * Service in the imdbAngularApp.
 */
angular.module('imdbAngularApp')
  .service('Genres', function ($resource) {
    return $resource('http://apiimdb.azurewebsites.net/api/genres');
  });
