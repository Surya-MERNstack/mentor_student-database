const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config().parsed;

const dbUrl = process.env.DB_URL;
const port = process.env.PORT;

mongoose.connect(dbUrl, { useNewUrlParser: true})
  .then(() => {
    console.log('MongoDB connected');
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(require('dotenv').config().parsed)
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const connect = mongoose.connection;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

connect.once('open', () => {
  console.log('MongoDB connection established');
});

const totaldatas = require('./router/routers');
app.use('/', totaldatas);
app.use('/mentors', totaldatas);
app.use('/student', totaldatas);
