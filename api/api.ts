import emailjs from '@emailjs/browser';
import {MyFormValues} from '../pages/contacts/ContactForm/ContactForm';

export const api = {
    sendEmail: (setStatus: (status:string) => void, setIsSending: (isSending:boolean) => void, values: MyFormValues) => {
        setIsSending(true)
        setStatus('Sending')
        emailjs.send('service_7m929wc', 'template_vubtb87', values, '32SWopQrOULWq2gAI')
            .then(() => {
                setStatus('Your message has been sent. Thank you.')
                setTimeout(() => {
                    setIsSending(false)
                }, 2000)

            }, () => {
                setStatus('Oops, something went wrong...')
                setTimeout(() => {setIsSending(false)}, 2000)
            });
    }
}
