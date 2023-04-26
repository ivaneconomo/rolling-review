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
const { emailValidation } = require('../helpers/valitadions');

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
    .withMessage('El formato de email ingresado no es válido.')
    .custom(emailValidation),
  body('password')
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
    .withMessage(
      'La contraseña requiere al menos una letra mayúscula, una letra minúscula y un número.'
    ),
  createUser
);

route.patch('/edit-user/:id', editUser);

route.patch('/disable-user/:id', disableUser);

route.delete('/delete-user/:id', deleteUser);

module.exports = route;
