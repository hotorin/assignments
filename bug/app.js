const config = require('config');
const express = require('express');
const _ = require('lodash');

const card = require('./services/card');

const app = express();

app.set('port', config.get('app.port'));

app.get('/cards', async (req, res) => {
    const cards = await card.getAll();

    res.json(cards);
});

module.exports = app;
