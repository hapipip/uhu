'use strict';

const Pellmell = require('pellmell');

const internals = {};

internals.regex = /"@(.+?)"/g;

internals.toArray = (obj, callback) => Object.keys(obj).map(key => {
  if (callback) {
    return callback(obj, key);
  }
  return obj[key];
});

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

module.exports.stick = (paths, config) => {
  let manifest;
  try {
    manifest = Pellmell.patch(paths, {
      sanitize: internals.mask
    });
  } catch(err) {
    console.log(err.message);
  }

  if (manifest.manifest) {
    manifest =  manifest.manifest;
  }

  if (manifest.registrations) {
    if (config) {
      manifest.registrations = internals.toArray(manifest.registrations, (obj, key) => {
        let value = JSON.stringify(obj[key]);
        if (internals.regex.test(value)) {
          return JSON.parse(value.replace(internals.regex, (str, match) => {
            return JSON.stringify(config.get(match));
          }));
        }
        return obj[key];
      });
    } else {
      manifest.registrations = internals.toArray(manifest.registrations);
    }
  }

  if (manifest.connections) {
    manifest.connections = internals.toArray(manifest.connections);
  }

  return manifest;
};
