const Knex = require('knex');
const _ = require('lodash');

const knexOptions = require('../knexfile');

const knex = Knex(_.omit(knexOptions, ['migrations', 'seeds']))

class Card {
    constructor() {
        this.tableName = 'cards'
    }

    async getAll() {
        return knex.from(this.tableName)
            .select('id', 'name', 'available_from', 'available_to', 'template_properties')
            .where('deleted_at', null)
            .then(rows => rows)
            .catch((err) => { throw err; });
    }
}

module.exports = new Card();
