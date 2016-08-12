'use strict';

const Lab =  require('lab');
const Uhu = require('../lib/index');
const Path = require('path');
const {expect} = require('code');
const {describe, it, before} = exports.lab = Lab.script();

describe('Test manifest building', () => {

  it('should gather config files into one single object (only one path)', done => {

    const expected = {
      a: ['cat', 'dog', 'fish'],
      b: {
        ba: {
          baa: {
            baaa: 'foo'
          },
          bab: {baba: 'cool'}
        },
        bb: "meaning of life"
      }
    };

    const result = Uhu.stick(__dirname + '/fixtures/test1');

    expect(result).to.equal(expected);
    done()
  });

  it('should gather config files into one single object (multiple paths)', done => {

    const expected = {
      a: {aa: 1},
      b: {
        ba: {
          baa: {
            baaa: true
          },
          bab: {baba: 'cool'}
        },
        bb: {response: 42}
      }
    };

    const result = Uhu.stick(Path.join(__dirname, 'fixtures', 'test1'), Path.join(__dirname, 'fixtures', 'test2'));

    expect(result).to.equal(expected);
    done()
  });


});
