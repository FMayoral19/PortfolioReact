import React, { useRef } from 'react'
import GitHubIcon from '../../assets/github-icon-2.svg'
import LinkedInIcon from '../../assets/linkedin-icon.svg'
import MailIcon from '../../assets/gmail-icon.svg'
import './contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        console.log('Form data:', form.current);
    
        emailjs.sendForm('service_2zwq477', 'template_5l98wz5', form.current, 'BG3gKe36o1QVfFHU4')  
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                e.target.reset()
                alert('Email Sent!')
            })
            .catch((error) => {
                console.error('Error sending email:', error.text);
            });
    };  
  return (
    <section id='contactPage'>
      <div className='clients'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='ContactacDes'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name'name='from_name'/>
            <input type='email' className='email' placeholder='Your Email' name='from_email'/>
            <textarea className='msg' name="message" rows='5' placeholder='Your message' />
            <button type='submit' value='send' className='submitBtn'>Send</button>
            <div className='links'>
            <img src={GitHubIcon} alt='GitHub' className='link' />
            <img src={LinkedInIcon} alt='LinkedIn' className='link' />
            <img src={MailIcon} alt='Mail' className='link' />
           </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
