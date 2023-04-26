const { Router } = require('express');
const { body } = require('express-validator');
const {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  disableUser,
} = require('../controllers/user.controllers');

const route = Router();

route.get('/get-users', getAllUsers);

route.get('/get-user-by-id/:id', getUserById);

route.post(
  '/create-user',
  body('email')
    .not()
    .isEmpty()
    .withMessage('El campo email es requerido.')
    .isEmail()
    .withMessage('El formato de email ingresado no es válido.'),
  createUser
);

route.patch('/edit-user/:id', editUser);

route.patch('/disable-user/:id', disableUser);

route.delete('/delete-user/:id', deleteUser);

module.exports = route;
