const axios = require('axios');
const express = require('express');

const app = express()
const port = 3000

const BASE_BACKEND_URL = '';

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
    const { data } = axios.get(`${BASE_BACKEND_URL}`);

    res.render('index', {
        subreddits: data.subreddits
    });
});

app.get('/rank', async (req, res) => {
    const { data } = axios.get(`${BASE_BACKEND_URL}`);

    res.render('rank', {
        rank: data.rank
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
