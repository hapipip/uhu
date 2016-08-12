## Interface

Uhu exports a single function `stick` accepting a String `path/to/the/manifest` specifying the Glue manifest for Hapi server configuration.

### `stick(baseDir)`

Composes a hapi server object where:
+ `baseDir` - a folder path valid

### Notes

The config files can be YAML, JSON and JS

## Usage

```javascript
'use strict';

const Glue = require('glue');
const Uhu = require('uhu');


const options = {
    relativeTo: __dirname
};

Glue.compose(Uhu.stick(__dirname + '/manifest'), options, (err, server) => {

    if (err) {
        throw err;
    }
    server.start(() => {

        console.log('hapi days!');
    });
});
```
