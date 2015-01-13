'use strict';

describe('Service: CurrentMovie', function () {

  // load the service's module
  beforeEach(module('imdbAngularApp'));

  // instantiate service
  var currentMovie;
  beforeEach(inject(function (_currentMovie_) {
    currentMovie = _currentMovie_;
  }));

  it('should do something', function () {
    expect(!!currentMovie).toBe(true);
  });

});
