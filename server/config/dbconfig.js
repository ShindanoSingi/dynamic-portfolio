const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('connected', () => console.log('Mongo DB Connection Established'));

db.on('error', (err) => console.log('Mongo DB Connection Error: ', err));

module.exports = mongoose;