import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required field.'),
  sport: yup
    .string()
    .required('Sport is required field.'),
  options: yup
    .string()
    .required('What you do? is required field.'),
});

export default schema;
