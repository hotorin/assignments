exports.up = function (knex) {
    return knex.transaction((trx) => {
        return trx.schema.createTable('cards', (table) => {
            table.increments();
            table.string('name', 255).notNullable();
            table.date('available_from').notNullable();
            table.date('available_to').notNullable();
            table.json('template_properties');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    });
};

exports.down = function (knex, Promise) {
    return knex.transaction((trx) => {
        return  trx.schema.dropTable('cards');
    });
};
