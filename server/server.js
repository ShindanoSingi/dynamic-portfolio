const express = require('express');
require('dotenv').config({path: '../.env'});
const app = express();
const dbConfig = require('./config/dbconfig');
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
const usersRoute = require('./routes/usersRoutes');
const projectsRoute = require('./routes/projectsRoutes');
const awardsRoute = require('./routes/awardsRoutes');
const certificationsRoute = require('./routes/certificationsRoutes');
const contactsRoute = require('./routes/contactsRoutes');
const educationsRoute = require('./routes/educationsRoutes');

app.use(express.json());

const server = require('http').createServer(app);

app.use('/api/users', usersRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/awards', awardsRoute)
app.use('/api/certifications', certificationsRoute)
app.use('/api/contacts', contactsRoute)
app.use('/api/educations', educationsRoute)

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));