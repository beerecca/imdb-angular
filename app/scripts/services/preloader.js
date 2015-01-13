'use strict';

/**
 * @ngdoc service
 * @name imdbAngularApp.Preloader
 * @description
 * # Preloader
 * Service in the imdbAngularApp.
 */
angular.module('imdbAngularApp')
  .service('Preloader', function () {
    this.preload = function(imageArray) {
      var preloadedImages = [];

      angular.forEach(imageArray, function(val, i) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = val;
      });
    };


  });
