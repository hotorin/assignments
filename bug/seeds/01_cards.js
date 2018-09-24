const moment = require('moment');

exports.seed = function (knex) {
    return knex('cards').del()
        .then(function () {
            return knex('cards').insert([
                {
                    name: 'card1',
                    available_from: moment().format(),
                    available_to: moment().add(2, 'days').format(),
                    template_properties: {
                        texts_in_card: [
                            'card1_text',
                            {
                                texts_object: 'super_text',
                            }
                        ],
                    },
                    created_at: moment().toISOString(),
                    updated_at: moment().toISOString(),
                },
                {
                    name: 'card2',
                    available_from: moment().format(),
                    available_to: moment().add(2, 'days').format(),
                    template_properties: {
                        feeds: [
                            {
                                match_id: ['5', '6', '7', '8'],
                            },
                            'matchpoint',
                        ],
                    },
                    created_at: moment().toISOString(),
                    updated_at: moment().toISOString(),
                },
                {
                    name: 'card3',
                    available_from: moment().format(),
                    available_to: moment().add(2, 'days').format(),
                    template_properties: {
                        available_on_platform: {
                            android: true,
                            ios: true,
                            web: true,
                        },
                    },
                    created_at: moment().toISOString(),
                    updated_at: moment().toISOString(),
                }
            ]);
        });
};
