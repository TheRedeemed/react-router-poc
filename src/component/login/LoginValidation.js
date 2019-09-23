import * as Yup from 'yup';

const LoginValidationSchema = Yup.object().shape({
    username: Yup.string().min(3,'Username must be at least 3 characters').required('username is required'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').required('password is required')
});

export default LoginValidationSchema;