'use strict';

module.exports = {
    server: {
        cache: 'redis'
    },
    connections: [
        {
            port: 8000,
            labels: ['web']
        },
        {
            port: 8001,
            labels: ['admin']
        }
    ],
    registrations: [
        {
            plugin: {
                register: './assets',
                options: {
                    uglify: true
                }
            }
        },
        {
            plugin: './ui-user',
            options: {
                select: ['web']
            }
        },
        {
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
        }
    ]
};
