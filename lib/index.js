'use strict';

const Pellmell = require('pellmell');
const Values = require('lodash.values');

module.exports = {

  stick(paths) {

    let manifest = Pellmell.patch(paths);

    if (manifest.registrations) {
      manifest.registrations = Values(manifest.registrations);
    }

    if (manifest.manifest) {
      return manifest.manifest;
    }

    return manifest;
  }
}
