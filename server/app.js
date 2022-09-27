// app.js
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
//const routes = require('routes')

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
//connectDB();
//trying this
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://127.0.0.1/basketballDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// added for testing

const routes = require('./routes/books');

app.use('/api', routes);
