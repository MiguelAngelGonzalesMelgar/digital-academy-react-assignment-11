import * as yup from 'yup';

export const personalInfoSchema =  yup.object().shape({
  name: yup.string().required("The name is required"),
  age: yup.number()
  .typeError("Age must be a number").
  min(14, "You must be at least 14 or older")
  .required("The age is required"),
  email: yup.string()
  .email("Please add a valid email")
  .required("Please add an email"),
});
