import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './LoginUser.css';
import InputText from '../../components/inputs/InputText';
import { Button } from '../../components/buttons/Button';
import { loginUser } from '../../api/api';
import { saveToken, saveUser } from './authFunctions';
import ImagenesApp from '../../assets/ImagenesApp';

export default function LoginUser() {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const initialValues = {
    identifier: '',
    password: '',
  };

  const validationSchema = Yup.object({
    identifier: Yup.string()
      .email('Correo electrónico inválido')
      .required('El correo electrónico es requerido'),
    password: Yup.string()
      .required('La contraseña es requerida'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await loginUser(values);
      console.log('Login result:', result);

      if (result.data.access_token) {
        saveToken(result.data.access_token);
        saveUser({ username: result.data.username, roles: result.data.roles });
        navigate('/home');
      } else {
        setLoginError('Credenciales incorrectas. Por favor, intente de nuevo.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Credenciales incorrectas. Por favor, intente de nuevo.');
    }
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Inicia sesión</h2>
        <img className="logo-fesa" src={ImagenesApp.logo} alt="Logo" height="80px" />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputText
                label="Correo electrónico"
                name="identifier"
                type="text"
                required
              />
              <InputText
                label="Contraseña"
                name="password"
                type="password"
                required
              />
              {loginError && <span className="error-message">{loginError}</span>}
              <Link to="/reset">¿Olvidaste la contraseña?</Link>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Ingresar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
