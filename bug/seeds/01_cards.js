const moment = require('moment');

exports.seed = function (knex) {
    return knex('cards').del()
        .then(function () {
            return knex('cards').insert([
                {
                    name: 'card1',
                    available_from: '2018-02-20',
                    available_to: '2018-02-24',
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
                    available_from: '2018-02-20',
                    available_to: '2018-02-24',
                    template_properties: {
                        feeds: [
                            {
                                match_id: ['5', '6', '7', '8'],
                            },
                            'matchPoint',
                        ],
                    },
                    created_at: moment().toISOString(),
                    updated_at: moment().toISOString(),
                },
                {
                    name: 'card3',
                    available_from: '2018-02-20',
                    available_to: '2018-02-24',
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
