'use strict';

describe('Service: Genres', function () {

  // load the service's module
  beforeEach(module('imdbAngularApp'));

  // instantiate service
  var Genres;
  beforeEach(inject(function (_Genres_) {
    Genres = _Genres_;
  }));

  it('should do something', function () {
    expect(!!Genres).toBe(true);
  });

});
