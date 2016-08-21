'use strict';

const Pellmell = require('pellmell');

const internals = {};

internals.mapIt = (obj) => Object.keys(obj).map(key => obj[key]);

internals.mask = {
  server: true,
  registrations: true,
  connections: true,
  manifest: {
    server: true,
    registrations: true,
    connections: true
  }
};

exports.stick = (paths) => {

  let manifest = Pellmell.patch(paths, {
    sanitize: internals.mask
  });

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
};
