import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FORM_REGEX } from '../../utils/regex';
import { customAlert, messages } from '../../utils/alerts';
import { useNavigate } from 'react-router-dom';
import { endPoints } from '../../utils/configs';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, lastname, email, password, confirmPassword } = formData;
  const { EMAIL_REGEX, PASSWORD_REGEX, FULLNAME_REGEX } = FORM_REGEX;
  const URL_SERVER = import.meta.env.VITE_URL_SERVER;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FULLNAME_REGEX.test(formData.name)) {
      alert('Formato no válido.');
      return;
    }
    if (!FULLNAME_REGEX.test(formData.lastname)) {
      alert('Formato no válido.');
      return;
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      alert('Formato de email no válido.');
      return;
    }
    if (!PASSWORD_REGEX.test(formData.password)) {
      alert('Formato de contraseña no válido');
      return;
    }
    if (!formData.password === formData.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.post(
        `${URL_SERVER}${endPoints.users}`,
        formData
      );
      console.log(response);
      customAlert(
        messages.registerSuccessTitle,
        messages.registerSuccessText,
        messages.successIcon,
        () => {
          navigate('/');
        }
      );
    } catch (error) {
      customAlert(
        messages.registerFailureTitle,
        messages.registerFailureText,
        messages.errorIcon,
        () => {
          navigate('*');
        }
      );
    }
  };

  return (
    <Form
      className='container d-flex flex-column gap-2'
      onSubmit={handleSubmit}
    >
      <Form.Group controlId='name'>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='lastname'>
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type='text'
          name='lastname'
          value={lastname}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='confirmPassword'>
        <Form.Label>Repetir Contraseña</Form.Label>
        <Form.Control
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div>
        <Button variant='primary' type='submit'>
          Registrarse
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
