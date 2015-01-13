'use strict';

describe('Service: Preloader', function () {

  // load the service's module
  beforeEach(module('imdbAngularApp'));

  // instantiate service
  var Preloader;
  beforeEach(inject(function (_Preloader_) {
    Preloader = _Preloader_;
  }));

  it('should do something', function () {
    expect(!!Preloader).toBe(true);
  });

});
