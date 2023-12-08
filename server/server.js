const express = require('express');
require('dotenv').config({path: '../.env'});
const cors = require('cors');
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
const experiencesRoute = require('./routes/experiencesRoutes');
const skillsRoute = require('./routes/skillsRoutes');
const teamMembersRoute = require('./routes/teamMembersRoutes');
const testimonialsRoute = require('./routes/testimonialsRoutes');
const aboutRoute = require('./routes/aboutRoutes');

app.use(express.json());



app.use(cors({
    origin: 'http://localhost:3000'
}));


const server = require('http').createServer(app);

app.use('/api/users', usersRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/awards', awardsRoute)
app.use('/api/certifications', certificationsRoute)
app.use('/api/contacts', contactsRoute)
app.use('/api/educations', educationsRoute)
app.use('/api/experiences', experiencesRoute)
app.use('/api/skills', skillsRoute)
app.use('/api/team-members', teamMembersRoute)
app.use('/api/testimonials', testimonialsRoute)
app.use('/api/about', aboutRoute)

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));