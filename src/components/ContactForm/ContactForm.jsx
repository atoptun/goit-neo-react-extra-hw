import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useId, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { addContact, updateContact } from '../../redux/contactsOps';
import {
  cancelEditContact,
  selectEditingContact,
} from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

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

function ContactForm() {
  const dispatch = useDispatch();

  const formId = useId();
  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  const editingContact = useSelector(selectEditingContact);

  const initValues = {
    id: editingContact?.id || '',
    name: editingContact?.name || '',
    number: editingContact?.number || '',
  };

  useEffect(() => {
    if (editingContact) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 300);
    }
  }, [editingContact]);

  const handleSubmit = async (values, actions) => {
    const contactData = { ...values };
    try {
      if (editingContact) {
        await dispatch(updateContact(contactData)).unwrap();
      } else {
        await dispatch(addContact(contactData)).unwrap();
      }
      actions.resetForm();

      setTimeout(() => {
        nameInputRef.current?.focus();
        actions.setTouched({}, false);
      }, 0);
    } catch (err) {
      const errorMessage =
        typeof err === 'string' ? err : err?.message || 'Error saving data';

      actions.setErrors({
        formError: errorMessage,
      });
    }
  };

  const handleCancel = () => {
    dispatch(cancelEditContact());
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      enableReinitialize={true}
      validateOnBlur={false}
    >
      {({ handleReset, isSubmitting, values, touched, errors }) => (
        <Form className={styles.contactForm} ref={formRef}>
          <Field name="id" hidden />
          <div className={styles.fieldGroup}>
            <label htmlFor={`${formId}_name`}>Name</label>
            <Field
              name="name"
              type="text"
              innerRef={nameInputRef}
              id={`${formId}_name`}
              className={styles.field}
              placeholder="Name"
              disabled={isSubmitting}
            />
            {touched.name && errors.name && values.name.trim() !== '' && (
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            )}
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor={`${formId}_number`}>Number</label>
            <Field
              name="number"
              type="text"
              id={`${formId}_number`}
              className={styles.field}
              placeholder="Phone number"
              disabled={isSubmitting}
            />
            {touched.number && errors.number && values.number.trim() !== '' && (
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            )}
          </div>

          {isSubmitting && (
            <div className={styles.formSubmitting}>Saving data ...</div>
          )}
          {errors.formError && (
            <div className={styles.formGlobalError}>{errors.formError}</div>
          )}

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              {editingContact ? 'Save contact' : 'Add contact'}
            </button>
            {editingContact && (
              <button
                type="button"
                onClick={() => {
                  handleReset();
                  handleCancel();
                }}
                className={styles.button}
                disabled={isSubmitting}
              >
                Cancel
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
