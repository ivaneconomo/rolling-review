const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();

const port = process.env.PORT;

const users = [
  {
    name: 'Iván',
    lastname: 'Ecónomo',
  },
  {
    name: 'David',
    lastname: 'Colomo',
  },
];

app.get('/users/', (req, res) => {
  res.send(users);
});

app.post('/new-user', (req, res) => {
  users.join(req.body);
  res.status(200).send('Usuario añadido con éxito.');
});

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto: ${port}`);
});
