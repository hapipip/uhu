'use strict';

const Lab =  require('lab');
const Uhu = require('../lib/index');
const Glue = require('glue');
const {expect} = require('code');
const {describe, it, before} = exports.lab = Lab.script();
const expected = require('./fixtures/expected');

describe('Test manifest building', () => {

  it('Loading manifest', (done) => {

    let manifest = Uhu.stick(__dirname + '/fixtures/test1');

    expect(manifest).to.be.an.object();
    expect(manifest.server).to.equal(expected.server);
    expect(manifest.connections).to.equal(expected.connections);
    expect(manifest.registrations).to.be.an.array();
    expect(manifest.registrations).to.have.length(3);
    expect(manifest.registrations).to.include(expected.registrations[0]);
    expect(manifest.registrations).to.include(expected.registrations[1]);
    expect(manifest.registrations).to.include(expected.registrations[2]);
    done();
  });

  it('Test manifest directly into glue', (done) => {

    const options = {
        relativeTo: __dirname
    };

    Glue.compose(Uhu.stick(__dirname + '/fixtures/test2'), options, (err, server) => {

      expect(err).to.not.exist();
      expect(server.plugins.helloworld).to.exist();
      expect(server.plugins.helloworld.hello).to.equal('world');
      done();
    });
  });
});
