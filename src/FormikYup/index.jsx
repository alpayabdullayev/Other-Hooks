import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import React from 'react';

const FormikYupMain = () => {
  const SignUpSchema = object().shape({
    username: string().min(3, 'min3 olamliidir').max(15, '15 olmalidir').required('bos olmasin'),
    email: string().email('duzgun daxil et email').required('bos olmasin'),
    password: string()
      .min(6, 'minimum 6 olmali')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
        'duzgun daxiledin'
      )
      .required('Password bos olmasin'),
  });

  return (
    <>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" />

          <Field type="text" name="email" />
            <span style={{ color: 'red' }}><ErrorMessage name="email" /></span>

          <Field type="password" name="password" />
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormikYupMain;
