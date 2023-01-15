import React, {useRef, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import s from '../../styles/Contacts.module.scss'
import {Fade} from 'react-awesome-reveal';
import {api} from '../../../api/api';

type MyFormValues = {
    name: string
    email: string
    message: string
}

const ContactForm = () => {
    let [isSending, setIsSending] = useState(false)
    let [status, setStatus] = useState('')
    const sendStyle = isSending ? s.formFade : s.hide;
    const initialValues: MyFormValues = {name: '', email: '', message: ''};
    const form = useRef();
    const sendEmail = () => {
        api.sendEmail(setStatus, setIsSending, form)
    };


    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {} as MyFormValues;
                    if (!values.name) {
                        errors.name! = 'Type your name';
                    }
                    if (!values.message) {
                        errors.message = 'Enter your message';
                    } else if (values.message.length < 10) {
                        errors.message = 'Type more that 10 symbols';
                    }
                    if (!values.email) {
                        errors.email = 'Type your email';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={sendEmail}
            >
                {({isSubmitting}) => <Form className={s.form}
                    // @ts-ignore
                                           ref={form}
                                           name={'Portfolio Index Form'}>
                    <Field name="name" placeholder="Name" className={s.input}/>
                    <ErrorMessage name="name" component="p"/>
                    <Field name="email" placeholder="Email" className={s.input}/>
                    <ErrorMessage name="email" component="p"/>
                    <Field name="message" placeholder="Message text" as="textarea"
                           className={s.textarea}/>
                    <ErrorMessage name="message" component="p"/>
                    <button type="submit" disabled={isSubmitting}>Send message</button>
                </Form>}
            </Formik>
            <Fade className={sendStyle}>
                <p>{status}</p>
            </Fade>
        </>

    );
};

export default ContactForm;