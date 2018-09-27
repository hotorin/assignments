const axios = require('axios');
const express = require('express');

const app = express();
const port = 3000;

const BASE_BACKEND_URL = 'http://localhost:3001';

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', async (req, res, next) => {
    let subreddits;
    try {
        const response = await axios.get(`${BASE_BACKEND_URL}/__CHANGE_ME__`);
        subreddits = response.data.subreddits;
    } catch (err) {
        next(err);
    }
    res.render('index', { subreddits });
});

app.get('/rank', async (req, res, next) => {
    let rank;
    try {
        const response = await axios.get(`${BASE_BACKEND_URL}/__CHANGE_ME__`);
        rank = response.data.rank;
    } catch (err) {
        next(err);
    }

    res.render('rank', { rank });
});

app.listen(port, () => console.log(`Client app listening on port ${port}!`));
