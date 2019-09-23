import React, {useState} from 'react';
import { Formik, Form } from 'formik';  //Form is a wrapper for the standard form that wires up the onSubmit handler to the Formik Component
import { Redirect } from 'react-router-dom';
import LoginHelpers from './LoginHelpers'
import LoginValidationSchema from './LoginValidation';

const LoginFrom = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center'
        }}>
            <h1>Login</h1>
            <Formik
                initialValues={{ username: '', password: '', itemList: []}}
                validate={LoginValidationSchema}
                onSubmit={(values, {setSubmitting}) => {
                        //console.log('Submitted values:', values);
                        const userInfo = {
                            username : values.username,
                            items : values.itemList,
                            currentItem: values.itemList[0]
                        }
                        setTimeout(() => setSubmitting(false), 3 * 1000);
                        LoginHelpers.setCookiesValues(userInfo);
                        
                        if (LoginHelpers.isCookieValid) {
                            setIsLoggedIn(true)
                        }
                    }
                }
            >
                {
                    props => {
                        const { 
                            values, 
                            errors, 
                            touched, 
                            dirty, 
                            isSubmitting, 
                            handleChange, 
                            handleBlur, 
                            handleReset,
                            setFieldValue 
                        } = props;

                        return(
                            <Form style={{ 
                                padding: '15px',
                                display: 'flex',
                                flexFlow: 'column',
                                alignItems: 'center' 
                            }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <label htmlFor='username'>Username</label>
                                    <div>
                                        <input
                                            name='username'
                                            type='text'
                                            placeholder='Enter your username'
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{ borderColor: errors.username && touched.username && 'red' }} 
                                        />
                                        {errors.username && touched.username && (<div style={{ color: 'red' }}>{errors.username}</div>)}
                                    </div>
                                </div>

                                {/* <div style={{ marginBottom: '15px' }}>
                                    <label htmlFor='password'>Password</label>
                                    <div>
                                        <input
                                            name='password'
                                            type='password'
                                            placeholder='Enter your password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{ borderColor: errors.password && touched.password && 'red' }}
                                        />
                                        {errors.password && touched.password && (<div style={{ color: 'red' }}>{errors.password}</div>)}
                                    </div>
                                </div> */}

                                <div style={{ marginBottom: '15px' }}>
                                    
                                    <input 
                                        name='itemList'
                                        type='checkbox'
                                        onChange={(event) => {
                                            const value = event.target.checked ? 'FE' : null;
                                            setFieldValue('itemList.0', value)
                                        }}
                                        checked={values.itemList.includes('FE')}
                                    />
                                    Front End
                                    <input
                                        name='itemList'
                                        type='checkbox'
                                        onChange={(event) => {
                                            const value = event.target.checked ? 'BE' : null
                                            setFieldValue('itemList.1', value)
                                        }}
                                        checked={values.itemList.includes('BE')}
                                    />
                                    Back End
                                </div>

                                <div>
                                    <input
                                        type='reset'
                                        value='Reset'
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    />
                                    &nbsp;
                                    <input
                                        type='submit'
                                        value='Submit'
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Form>
                        ) 
                    }
                }

            </Formik>
            {isLoggedIn && <Redirect to='/dashboard' />}
        </div>
    );
}

export default LoginFrom