import { Box, Button, Link, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Link as DomLink } from 'react-router-dom';

import { FormCard } from '../FormCard/FormCard.jsx';
import { debugUser } from './../../utils/debug.js';
import * as styles from './LoginForm.styles.js';

const initValues = {
  email: debugUser?.email || '',
  password: debugUser?.password || '',
};

function LoginForm({ onSubmit }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initValues,
  });

  const onFormSubmit = values => {
    onSubmit(values);
    reset();
  };

  return (
    <FormCard variant="outlined">
      <Box sx={styles.formCardBox}>
        <Typography variant="h4" component="h1" sx={styles.captionTypo}>
          Sign in
        </Typography>
        <FormContainer onSuccess={handleSubmit(onFormSubmit)}>
          <Box sx={styles.formBox}>
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
              Sign in
            </Button>

            <Typography align="center">
              Don't have an account?{' '}
              <Link component={DomLink} to="/register">
                Sign up
              </Link>
            </Typography>
          </Box>
        </FormContainer>
      </Box>
    </FormCard>
  );
}

export default LoginForm;
