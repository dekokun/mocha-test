var calc = require('../lib/calc');

var should = require('should');

describe('calc', function() {
  describe('.add', function() {
    it('should return sum of 2 arguments', function() {
      var result = calc.add(1, 2);
      result.should.equal(3);
    });

    it('error', function() {
      var result = calc.add(1, 3);
      result.should.equal(4);
    });
  });
});
