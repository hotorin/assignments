const config = require('config');
const express = require('express');
const _ = require('lodash');

const { camelCaseObjectKeys } = require('./utils');
const card = require('./services/card');

const app = express();

app.set('port', config.get('app.port'));

app.get('/cards', async (req, res) => {
    const results = await card.getAll();
    const cards = _.map(results, result => camelCaseObjectKeys(result));

    res.json(cards);
});

module.exports = app;
