import * as yup from 'yup'

    const BasicInfo = yup.object().shape({
        Firstname: yup
        .string()
        //   .email(/^[a-zA-Z][a-zA-Z\\s]+$/,"Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid first Name')
        .min(3, ({ min }) => `First name less ${min} characters`)
      //  .max(8, ({ max }) => `First name greater than ${max} characters`)
        .required('first name is Required'),
          Lastname: yup
        .string()
          //   .email("Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid Last Name')
        .min(3, ({ min }) => `Last name less ${min} characters`)
        // .max(8, ({ max }) => `Last name greater than ${max} characters`)
        .required('Last name is Required'),
      });


      const DrivingLicense = yup.object().shape({
        Firstname: yup
        .string()
        //   .email(/^[a-zA-Z][a-zA-Z\\s]+$/,"Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid first Name')
        .min(3, ({ min }) => `First name less ${min} characters`)
      //  .max(8, ({ max }) => `First name greater than ${max} characters`)
        .required('first name is Required'),
          Lastname: yup
        .string()
          //   .email("Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid Last Name')
        .min(3, ({ min }) => `Last name less ${min} characters`)
        // .max(8, ({ max }) => `Last name greater than ${max} characters`)
        .required('Last name is Required'),
      });


      const IDConfirmation = yup.object().shape({
        Firstname: yup
        .string()
        //   .email(/^[a-zA-Z][a-zA-Z\\s]+$/,"Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid first Name')
        .min(3, ({ min }) => `First name less ${min} characters`)
      //  .max(8, ({ max }) => `First name greater than ${max} characters`)
        .required('first name is Required'),
          Lastname: yup
        .string()
          //   .email("Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid Last Name')
        .min(3, ({ min }) => `Last name less ${min} characters`)
        // .max(8, ({ max }) => `Last name greater than ${max} characters`)
        .required('Last name is Required'),
      });



      
      const CNIC = yup.object().shape({
        Firstname: yup
        .string()
        //   .email(/^[a-zA-Z][a-zA-Z\\s]+$/,"Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid first Name')
        .min(3, ({ min }) => `First name less ${min} characters`)
      //  .max(8, ({ max }) => `First name greater than ${max} characters`)
        .required('first name is Required'),
          Lastname: yup
        .string()
          //   .email("Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid Last Name')
        .min(3, ({ min }) => `Last name less ${min} characters`)
        // .max(8, ({ max }) => `Last name greater than ${max} characters`)
        .required('Last name is Required'),
      });