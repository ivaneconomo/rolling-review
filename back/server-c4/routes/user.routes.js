const { Router } = require('express');

const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} = require('../controllers/user.controllers');

const route = Router();

route.get('/get-users', getAllUsers);

route.get('/get-user-by-id/:id', getUserById);

route.post('/create-user', createUser);

route.patch('/edit-user/:id', editUser);

route.delete('/delete-user/:id', deleteUser);

module.exports = route;
