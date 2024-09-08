import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("invalid email").required("emaail is required"),
    password: Yup.string().required("password is required")
});


const FormikForm = () => {

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
                actions.setSubmitting(false)
            }}
        >

            <Form>
                <Field type='text' name='name' />
                <ErrorMessage name='name' component='div' style={{ color: 'red' }} />

                <Field type='email' name='email' />
                <ErrorMessage name='email' component='div' style={{ color: 'red' }} />

                <Field type='password' name='password' />
                <ErrorMessage name='password' component='div' style={{ color: 'red' }} />

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
}

export default FormikForm;
