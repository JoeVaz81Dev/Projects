import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2me6i17', 'template_ap62y8y', form.current, 'RcaS-J6A4whuhhIll')
    
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jovan.vazquez@icloud.com</h5>
            <a href="mailto:jovan.vazquez@icloud.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Jovan Vazquez</h5>
            <a href="https://m.me/jovan.vazquez.984/" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+8613484101592" target="_blank">Send a Message</a>
          </article>
        </div>
        {/*  END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Mesasage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact