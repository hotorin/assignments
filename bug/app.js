const config = require('config');
const express = require('express');

const card = require('./services/card');

const app = express();

app.set('port', config.get('app.port'));

app.get('/cards', async (req, res) => {
    const cards = await card.getAll();

    res.json(cards);
});

/**
 * Part 2 code here
 * Finish CRUD functions for cards
 */

module.exports = app;
