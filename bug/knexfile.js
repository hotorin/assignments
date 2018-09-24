const config = require('config');
const path = require('path');

module.exports = {

    client: 'pg',
    connection: {
        host: config.get('database.host'),
        user: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.name'),
    },
    migrations: {
        tableName: '_migrations',
        directory: path.join(__dirname, '/migrations'),
    },
    seeds: {
        directory: path.join(__dirname, '/seeds'),
    },

};
