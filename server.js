const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const pageRoute = require('./routes/pageRoute');

// environment variable
dotenv.config()
const PORT = process.env.SERVER_PORT || 4000;

// init express 
const app = express();

// init json and from data
app.use(express.json());
app.use(express.urlencoded({extended : false}))


    // express static
    app.use('/public', express.static('public'));

    // router init
    app.use(pageRoute);

app.post('/formsubmit', (req, res) => {
    res.status(200).json(req.body);
});

app.post('/formsubmit-2', (req, res) => {
    res.status(200).json(req.body);
})


// server listen
app.listen(PORT, () => {
    console.log('server is running on 5050');
})