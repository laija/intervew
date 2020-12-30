const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(bodyParser.json());

const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

// Db connection
mongoose.connect(process.env.dbUrl, {useNewUrlParser: true, useUnifiedTopology: true},() => 
    console.log('Connected to db!')
);

app.listen(3000, () => {
    console.log('Listening on port: 3000');
});