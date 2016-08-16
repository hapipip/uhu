## Interface

Uhu exports a single function `stick` accepting a String or an Array specifying the configuration paths to the Glue manifest for Hapi server configuration.

### `stick(paths)`

Composes a hapi server object where:
+ `paths` -  a String or an Array of paths valid folder

### Notes

The config files can be a Folder, YAML, JSON and JS module

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
