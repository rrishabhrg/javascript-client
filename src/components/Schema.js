import * as yup from 'yup';

const schema = yup.object({
  Name: yup.string().required('Name is required field.').min(3).max(30),
  Sport: yup.array().required('Sport is required field.'),
  Role: yup.array().required('What you do? is required field.'),
});

export default schema;
