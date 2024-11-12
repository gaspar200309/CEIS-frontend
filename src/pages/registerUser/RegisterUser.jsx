import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './RegisterUser.css';
import InputText from '../../components/inputs/InputText';
import { Button } from '../../components/button/Button';
import { registerUser } from '../../api/Api'; 
import ImagesApp from '../../assets/ImagesApp';

export default function RegisterUser() {
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    name: '',
    password: '',
    password2: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Correo electrónico inválido')
      .required('El correo electrónico es requerido'),
    name: Yup.string()
      .required('El nombre es requerido')
      .min(3, 'El nombre debe tener al menos 3 caracteres'),
    password: Yup.string()
      .required('La contraseña es requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    password2: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Confirme su contraseña'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await registerUser(values);
      console.log('Register result:', result);

      if (result.status === 201) {
        navigate('/login'); 
      } else {
        setRegisterError('Hubo un error en el registro. Inténtelo de nuevo.');
      }
    } catch (error) {
      console.error('Register error:', error);
      setRegisterError('Hubo un error en el registro. Inténtelo de nuevo.');
    }
    setSubmitting(false);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Registrarse</h2>
        <img className="logo-fesa" src={ImagesApp.Logo} alt="Logo" height="80px" />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputText
                label="Correo electrónico"
                name="email"
                type="email"
                required
              />
              <InputText
                label="Nombre"
                name="name"
                type="text"
                required
              />
              <InputText
                label="Contraseña"
                name="password"
                type="password"
                required
              />
              <InputText
                label="Confirmar Contraseña"
                name="password2"
                type="password"
                required
              />
              {registerError && <span className="error-message">{registerError}</span>}
              <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Registrarse
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
