import React, {useState} from 'react';
import {ErrorMessage, Field, useFormik} from 'formik';
import s from '../../styles/Contacts.module.scss'
import {Fade} from 'react-awesome-reveal';
import {api} from '../../../api/api';

export type MyFormValues = {
    name: string
    email: string
    message: string
}

const ContactForm = () => {
    let [isSending, setIsSending] = useState(false)
    let [status, setStatus] = useState('')
    const sendStyle = isSending ? s.formFade : s.hide;
    const sendEmail = async (values: MyFormValues) => {
        await api.sendEmail(setStatus, setIsSending, formik.values)
        formik.resetForm()
    };

    const formik = useFormik({
        validate: (values) => {
            const errors = {} as Partial<MyFormValues>;
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
        },
        initialValues: {
            name: '',
            email: '',
            message: ''
        } as MyFormValues,
        onSubmit: (values: MyFormValues) => {
            sendEmail(values)
        }
    })
    return (
        <>
            <form className={s.form}
                  name={'Portfolio Index Form'}
                  onSubmit={formik.handleSubmit}
            >
                <input placeholder="Name" className={s.input}
                       {...formik.getFieldProps('name')}
                />
                {formik.errors.name && formik.touched.name ?
                    <div className="text-rose-600">{formik.errors.name}</div> : null}
                <input placeholder="Email" className={s.input}
                       {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email ?
                    <div className="text-rose-600">{formik.errors.email}</div> : null}
                <textarea placeholder="Message text"
                          className={s.textarea}
                          {...formik.getFieldProps('message')}
                />
                {formik.errors.message && formik.touched.message ?
                    <div className="text-rose-600">{formik.errors.message}</div> : null}
                <button type="submit">Send message</button>
            </form>
            <Fade className={sendStyle}>
                <p>{status}</p>
            </Fade>
        </>

    );
};

export default ContactForm;