const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const PORT = 3000;
// REQUIRE MIDDLEWARE
dotenv.config({ path: './.env' });
const instantMongoCrud = require('express-mongo-crud'); // require the module

mongoose.connect(process.env.MONGO_URI);

const options = { //specify options
    host: `localhost:${PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser
app.use(instantMongoCrud(options)); // use as middleware

app.listen(PORT, () => {
    console.log('started');
});