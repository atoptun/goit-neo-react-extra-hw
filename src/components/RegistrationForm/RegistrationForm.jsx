import { Box, Button, Link, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Link as DomLink } from 'react-router-dom';

import { FormCard } from '../FormCard/FormCard.jsx';
import { debugUser } from './../../utils/debug.js';
import * as styles from './RegistrationForm.styles.js';

const initValues = {
  name: debugUser?.name || '',
  email: debugUser?.email || '',
  password: debugUser?.password || '',
};

function RegistrationForm({ onSubmit }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initValues,
  });

  const onFormSubmit = values => {
    onSubmit(values);
    reset();
  };

  return (
    <FormCard variant="outlined">
      <Box sx={styles.cardBox}>
        <Typography variant="h4" component="h1" sx={styles.captionTypo}>
          Sign up
        </Typography>
        <FormContainer onSuccess={handleSubmit(onFormSubmit)}>
          <Box sx={styles.formBox}>
            <TextFieldElement
              name="name"
              type="text"
              label="Name"
              placeholder="Name"
              required
              fullWidth
              control={control}
            />

            <TextFieldElement
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              required
              fullWidth
              control={control}
            />

            <TextFieldElement
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              required
              fullWidth
              control={control}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign up
            </Button>

            <Typography align="center">
              Already have an account?{' '}
              <Link component={DomLink} to="/login">
                Sign in
              </Link>
            </Typography>
          </Box>
        </FormContainer>
      </Box>
    </FormCard>
  );
}
export default RegistrationForm;
