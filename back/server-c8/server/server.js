const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv/config');
require('../dataBase/dbConnection');

const userRoutes = require('../routes/user.routes');

const PORT = process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
