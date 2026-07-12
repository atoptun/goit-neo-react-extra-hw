import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

const initValues = {
  email: 'user_test_17462@gmail.com',
  password: 'user_test_17462@gmail.com',
};

function LoginForm({ onSubmit }) {
  const formId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={`${formId}_email`}>Email:</label>
        <Field
          name="email"
          type="email"
          id={`${formId}_email`}
          placeholder="Email"
        />
        <br />
        <label htmlFor={`${formId}_password`}>Password:</label>
        <Field
          name="password"
          type="password"
          id={`${formId}_password`}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
export default LoginForm;
