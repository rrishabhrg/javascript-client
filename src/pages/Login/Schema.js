import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .email('Email Address must be a valid email.')
    .required('Email Address is required field.'),
  password: yup
    .string()
    .min(8, 'Password must contain 8 characters.')
    .required('Password is required.'),
});

export default schema;
