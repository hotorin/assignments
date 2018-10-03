const Knex = require('knex');
const _ = require('lodash');

const knexOptions = require('../knexfile');
const { camelCaseObjectKeys } = require('../utils');

const knex = Knex(_.omit(knexOptions, ['migrations', 'seeds']));

class Card {
    constructor() {
        this.tableName = 'cards'
    }

    async getAll() {
        return knex.from(this.tableName)
            .select()
            .where('deleted_at', null)
            .then(rows => {
                return _.map(
                    rows,
                    (row) => camelCaseObjectKeys(row),
                );
            })
            .catch((err) => {
                throw err;
            });
    }

    async getUser(req) {
        const cardID = req.params;
        try {
          let cardSelect = await knex.from(this.tableName).select().where('id', cardID.id);
          let setFormat = await camelCaseObjectKeys(cardSelect);
          return setFormat;
        } catch (err) {
          return { reponseCode : "400 Get Cards Error For One User Error", detail : error};
        }
    }

    async create(req) {
        const cardDetail = req.body;
        try {
          let insertResult = await knex(this.tableName).returning("*").insert(cardDetail);
          return insertResult;
        } catch (error) {
          return { reponseCode : "401 Create Cards Error", detail : error};
        }
    }

    async delete(req) {
        const deleteID = req.body;
        try {
          let deleteResult = await knex(this.tableName).where( "id" , deleteID.id ).del();
          return { response: 'Success' , detail: deleteResult};
        } catch (error) {
          return { reponseCode : "402 Delete Cards Error", detail : error};
        }
    }

    async update(req) {
        const updateDetail = req.body;
        try {
          let updateResult = await knex(this.tableName).where( 'id', updateDetail.id ).update(updateDetail).returning('*');
          return { response: 'Success' , detail: updateResult};
        } catch (error) {
          return { reponseCode : "403 Update Cards Error", detail : error};
        }
    }
}

module.exports = new Card();
