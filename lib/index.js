'use strict';

const RequireYml = require('require-yml');
const Hoek = require('hoek');

const internals = {};

internals.Uhu = module.exports = {};

internals.Uhu.stick = (...paths) => {

  return paths.reduce((before, path) => {

    return Hoek.applyToDefaults(before, RequireYml(path), true);
  }, {});

};

