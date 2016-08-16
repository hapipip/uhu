'use strict';

const Pellmell = require('pellmell');

const internals = {};

internals.mapIt = (obj) => Object.keys(obj).map(key => obj[key]);

module.exports.stick = (paths) => {

  let manifest = Pellmell.patch(paths);

  if (manifest.manifest) {
    manifest =  manifest.manifest;
  }

  if (manifest.registrations) {
    manifest.registrations = internals.mapIt(manifest.registrations);
  }

  if (manifest.connections) {
    manifest.connections = internals.mapIt(manifest.connections);
  }

  return manifest;
}
