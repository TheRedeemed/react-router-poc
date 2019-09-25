import React from 'react';
import { Formik, Form } from 'formik';

const FESearchForm = ({...props}) => {
    const { onSearchSubmit } = props;
    return(
        <div>
            <h3>Search Form</h3>
            <Formik
                initialValues={{ searchTerm: '' }}
                onSubmit={(values, {setSubmitting}) => {
                    onSearchSubmit(values);
                    setTimeout(() => setSubmitting(false), 3 * 1000);
                }}
            >
                {
                    props => {
                        const { values, handleChange, handleBlur, isSubmitting } = props;

                        return(
                            <Form style={{ display: 'flex' }}>
                                <div>
                                    <label htmlFor='searchTerm' style={{marginRight: '10px'}}>Search Field</label>
                                    <input 
                                        name='searchTerm'
                                        type='text'
                                        placeholder='Enter value to search'
                                        value={values.searchTerm}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ marginRight: '10px' }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type='submit'
                                        value='Submit'
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Form>
                        );
                    }
                }
            </Formik>
        </div>
    );
}

export default FESearchForm