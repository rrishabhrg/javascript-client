import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long.')
    .required('Name is required field.'),
  email: yup
    .string()
    .email('Email Address must be a valid email.')
    .required('Email Address is required field.'),
  password: yup
    .string()
    .min(8, 'Password must contain 8 characters.')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required.')
    .oneOf([yup.ref('password'), null], 'Must match password.'),
});

export default schema;
