'use strict';

const RequireYml = require('require-yml');
const Values = require('lodash.values');

module.exports = {

  stick(baseDir) {

    let manifest = RequireYml(baseDir, value => {
      if (value.config) {
        return value.config;
      }

      return value
    });

    if (manifest.registrations) {
      manifest.registrations = Values(manifest.registrations);
    }

    if (manifest.manifest) {

      return manifest.manifest;
    }

    return manifest;
  }
}
