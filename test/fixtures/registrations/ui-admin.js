'use strict';

module.exports = () => ({
    plugin: {
        register: './ui-admin',
        options: {
            sessiontime: 500
        }
    },
    options: {
        select: ['admin'],
        routes: {
            prefix: '/admin'
        }
    }
});
