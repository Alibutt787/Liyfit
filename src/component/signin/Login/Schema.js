
import * as yup from 'yup'
export const NameValidationSchema = yup.object().shape({
    PHONENUMBER: yup
    .string()
    //   .email(/^[a-zA-Z][a-zA-Z\\s]+$/,"Please enter valid email")
    .matches( /^[0-9]\d*$/, 'Special character are not allowed ')
    .min(10, ({ min }) => `Mobile Number Must be ${min} characters`)
    .max(10, ({ max }) => `Mobile Number Must be  ${max} characters`)
    .required('Mobile number is Required')
    .typeError('u must specify a number')
     
  })