require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcript = require('bcrypt');
const jwt = require('jsonwebtoken');
// const movies_routes = import('./routes/movie-route.js');
// const directors_routes = import('./routes/director-route.js');
// const producers_routes = import('./routes/producer-route.js');
// const user_routes = import('./routes/user-route.js');

const app = express();

// Importação usando require()
const movies_routes = require('./routes/movie-route.js');
const directors_routes = require('./routes/director-route.js');
const producers_routes = require('./routes/producer-route.js');
const user_routes = require('./routes/user-route.js');


app.use(express.json());

app.use('/movie', movies_routes);
app.use('/director', directors_routes);
app.use('/producer', producers_routes);
app.use('/user', user_routes);


app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));