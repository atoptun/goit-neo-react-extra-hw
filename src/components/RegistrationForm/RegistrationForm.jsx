import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

const initValues = {
  name: 'user_test_17462',
  email: 'user_test_17462@gmail.com',
  password: 'user_test_17462@gmail.com',
};

function RegistrationForm({ onSubmit }) {
  const formId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={`${formId}_name`}>Name:</label>
        <Field
          name="name"
          type="text"
          id={`${formId}_name`}
          placeholder="Name"
        />
        <br />
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
export default RegistrationForm;
