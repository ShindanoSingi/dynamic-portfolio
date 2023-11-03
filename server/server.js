const express = require('express');
require('dotenv').config({path: '../.env'});
const app = express();
const dbConfig = require('./config/dbconfig');
const PORT = process.env.PORT || 8080;

// Connect to MongoDB



app.use(express.json());

const server = require('http').createServer(app);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));