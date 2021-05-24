import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

export default function SignupForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            email: Yup.string().email('Invalid email address').required('Required')
        }),
        onSubmit: values => {
            axios.post('https://jsonplaceholder.typicode.com/users', values)
                .then((response) => {
                    localStorage.setItem('token', response.data.email);
                    window.location.reload()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
        </form>
    );
};