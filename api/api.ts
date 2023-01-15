import emailjs from '@emailjs/browser';

export const api = {
    sendEmail: (setStatus: (status:string) => void, setIsSending: (isSending:boolean) => void, form: React.MutableRefObject<any>) => {
        setIsSending(true)
        setStatus('Sending')
        emailjs.sendForm('service_7m929wc', 'template_vubtb87', form.current!, '32SWopQrOULWq2gAI')
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
