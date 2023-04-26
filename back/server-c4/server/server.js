const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');

const userRoutes = require('../routes/user.routes');
const PORT = process.env.PORT;

try {
  mongoose.connect('mongodb://127.0.0.1:27017/mydb');
  console.log('Mongoose conectado');
} catch (error) {
  console.log(error);
}

const createCat = () => {
  const Cat = mongoose.model('Cat', { name: String });
  const kitty = new Cat({ name: 'Pomelo' });
  kitty.save().then(() => console.log('meow'));
};

//createCat();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
