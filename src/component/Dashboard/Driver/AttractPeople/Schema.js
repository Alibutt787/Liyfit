import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})


export const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      .matches(/(03)(\d){10}\b/, 'Enter a valid phone number')
      .max(11, ({ max }) => `Mobile no must be at least ${max} numbers`)
      .min(11, ({ min }) => `Mobile no must be at least ${min} numbers`)
      .required('Phone number is required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  })


  export const createPostSchema = yup.object().shape({
   
       initialPoint: yup
      .string()
      .required('starting Point is Required '),
      finalPoint: yup
      .string()
      .required('Final / destination is required '),
      fare: yup
      .string()
      .required('fare is required '),
      date: yup
      .string()
      .required('date is required '),
      time: yup
      .string()
      .required('time is required'),
      vehicle: yup
      .string()
      .required('Vehicle name is required'),
      seats: yup
      .string()
      .max(12, ({ max }) => `Mobile no must be at least ${max} numbers`)
      .required('no. of seats are required'),
     Description : yup
      .string()
      .required('description is required'),
  
    
  })