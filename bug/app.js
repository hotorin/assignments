const config = require('config');
const express = require('express');
const bodyParser = require("body-parser");
const card = require('./services/card');

const app = express();

app.set('port', config.get('app.port'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '20mb' }))

app.get('/cards', async (req, res) => {
    const cards = await card.getAll();
    res.json(cards);
});

/**
 * Part 2 code here
 * Finish CRUD functions for cards
 */

 app.get('/cards/:id', async (req, res) => {
     const cards = await card.getUser(req);
     res.json(cards);
 });

 app.post('/cards/create', async (req, res) => {
     const cards = await card.create(req);
     res.json(cards);
 });

 app.post('/cards/delete', async (req, res) => {
     const cards = await card.delete(req);
     res.json(cards);
 });

 app.post('/cards/update', async (req, res) => {
     const cards = await card.update(req);
     res.json(cards);
 });

module.exports = app;
