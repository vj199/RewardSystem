import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .email('Please enter valid email!.')
    .required('Email is required!.'),
  password: yup
    .string()
    .required('Password is required!.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character.',
    ),
});

const signupValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required!.'),
  email: yup
    .string()
    .email('Please enter valid email!.')
    .required('Email is required!.'),
  designation: yup.string().required('Designation is required!.'),
  password: yup
    .string()
    .required('Password is required!.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character.',
    ),
});

const changePasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email!.')
    .required('Email is required!.'),
})

const passwordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required!.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character.',
    ),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export { signupValidationSchema, loginValidationSchema, changePasswordValidationSchema, passwordValidationSchema };
