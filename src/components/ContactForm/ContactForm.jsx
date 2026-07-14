import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { TextFieldElement } from 'react-hook-form-mui';
import * as Yup from 'yup';

import * as styles from './ContactForm.styles.js';

const ContactSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[x\d\s-]+$/, 'Only numbers, spaces and hyphens are allowed')
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

function ContactForm({ contact, formId, onSubmit }) {
  const formMethods = useForm({
    // defaultValues: contact,
    values: contact,
    resolver: yupResolver(ContactSchema),
    mode: 'onTouched',
  });

  const {
    // formState: { isSubmitting },
    control,
    handleSubmit,
  } = formMethods;

  const onSubmitLocal = values => {
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLocal)} id={formId}>
      <Box sx={styles.formBox}>
        <TextFieldElement
          name="name"
          label="Name"
          placeholder="Name"
          fullWidth
          control={control}
          // autoFocus
        />

        <TextFieldElement
          name="number"
          label="Phone number"
          placeholder="Phone number"
          fullWidth
          control={control}
        />
      </Box>
    </form>
  );
}

export default ContactForm;
