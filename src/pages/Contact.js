import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.min.css';
import earth from '../earth.png';
import comet from '../Comet.png';
import saturn from '../Saturn.png';
import ufo from '../UFO.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6l0nqoa',
        'template_mj5svxi',
        form.current,
        'user_G3CjMdVEDQr2iAgyItDya'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset();
  };
  return (
    <div className='Contact'>
      <div className='contact__container'>
        <div className='contact__form'>
          <div className='left'>
            <h2>Creating websites that are out of this world!</h2>
          </div>
          <div className='right'>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input
                className='user_name'
                type='text'
                name='from_name'
                placeholder='First and Last please 🚀'
              />
              <label>Email</label>
              <input
                className='email'
                type='email'
                name='from_email'
                placeholder='Something with an @ please 👾'
              />
              <label>Message</label>
              <textarea name='message' placeholder='How can I help? 🧐' />
              <input type='submit' value='Send' />
            </form>
          </div>
        </div>
        <img class='earth' src={earth} alt='earth' />
        <img class='comet' src={comet} alt='comet' />
        <img class='saturn' src={saturn} alt='saturn' />
        <img class='ufo' src={ufo} alt='ufo' />
      </div>
    </div>
  );
}

export default Contact;
