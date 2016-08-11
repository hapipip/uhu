'use strict';

const Lab =  require('lab');
const Uhu = require('../index');
const {expect} = require('code');
const {describe, it, before} = exports.lab = Lab.script();
const expected = require('./expected');

describe('Test manifest building', () => {
  it('Loading manifest', (done) => {
    let manifest = Uhu.stick(__dirname + '/fixtures');

    expect(manifest).to.be.an.object();
    expect(manifest.server).to.equal(expected.server);
    expect(manifest.connections).to.equal(expected.connections);
    expect(manifest.registrations).to.be.an.array();
    expect(manifest.registrations).to.have.length(3);
    expect(manifest.registrations).to.include(expected.registrations[0]);
    expect(manifest.registrations).to.include(expected.registrations[1]);
    expect(manifest.registrations).to.include(expected.registrations[2]);
    done();
  })
});
