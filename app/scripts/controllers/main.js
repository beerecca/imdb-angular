'use strict';

/**
 * @ngdoc function
 * @name imdbAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imdbAngularApp
 */
angular.module('imdbAngularApp')
  .controller('MainCtrl', function ($scope, Movies, Genres, Preloader) {

    $scope.movies = Movies.query(null, function(movies){
      var movieImages = [];
      angular.forEach(movies, function(value) {
        this.push(value.image);
      }, movieImages);
      Preloader.preload(movieImages);
    });

    $scope.genres = Genres.query();

    $scope.query = '';

    $scope.currentMovie = Movies.get({id:1});

    $scope.changeCurrentMovie = function(currentMovieId) {
      if (currentMovieId !== null) {
        $scope.currentMovie = Movies.get({id:currentMovieId});
      } else {
        return Movies.get({id:1});
      }
    };

    $scope.$watchCollection('filtered', function() {
      if ($scope.filtered !== undefined) {
        $scope.currentMovie = $scope.filtered[0];
      }
    }, true);

  });
