import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long.')
    .required('Name is required field.'),
  emailAddress: yup
    .string()
    .email('Email Address must be a valid email.')
    .required('Email Address is required field.'),
});

export default schema;
