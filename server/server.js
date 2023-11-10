const express = require('express');
require('dotenv').config({path: '../.env'});
const app = express();
const dbConfig = require('./config/dbconfig');
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
const usersRoute = require('./routes/usersRoutes');
const projectsRoute = require('./routes/projectsRoutes');
const awardsRoute = require('./routes/awardsRoutes');

app.use(express.json());

const server = require('http').createServer(app);

app.use('/api/users', usersRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/awards', awardsRoute)

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));