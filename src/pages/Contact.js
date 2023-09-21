import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [validationError, setValidationError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if any of the input fields are empty
        if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
            setValidationError('Please fill out all fields.');
            return;
        }

        emailjs
            .sendForm('service_hzgyaoh', 'template_qorv4vo', form.current, 'iXEuyUiB165LDQN9L')
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSubmitted(true); // Set the state to true after successful submission
                    setValidationError(''); // Clear any previous validation error
                },
                (error) => {
                    console.log(error.text);
                    setValidationError('An error occurred. Please try again later.');
                }
            );
    };

    return (
        <div id='contact'>

            {isSubmitted ? (
                <div className="successMessage">
                    Thank you for contacting me! I will get back to you shortly.
                </div>
            ) : (
                <>
                    <h1 className="ContactPageTitle"> Contact ME</h1>
                    <span className="contactDesc">Feel free to contact me with any questions or inquiries. I'd love to hear from you!</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder='Your Name' name='user_name' />
                        <input type="email" className="email" placeholder='Your Email' name='user_email' />
                        <textarea className="msg" name="message" rows="5" placeholder='Your message'></textarea>
                        {validationError && <p className="error">{validationError}</p>} {/* Display validation error message */}
                        <button type='submit' value='Send' className='submitBtn' > Submit </button>
                    </form>
                </>
            )}
        </div>
    );
}

export default Contact;
