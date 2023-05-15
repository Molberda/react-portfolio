import React, { useRef } from "react";
import "../Components/Modal.css";
import { Button } from "@mui/material";
import emailjs from '@emailjs/browser'

const Modalbottom = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wuzb1m5', 'template_yh47puc', form.current, 'pP19DnVESUmrE9Psq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="modalbottom">
      <div className="modal__info">
        <h1 className="modal__title">
          Dont hesitate to <span className="highlight">Contact Me!</span>
        </h1>
        <div className="modal__info--container">
          <div className="form__container">
            <form ref={form} id="modal__form" onSubmit={sendEmail}>
              <div className="form__organizer">
                <div className="form__item">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="John Doe" name="user_name" required />
                </div>
                <div className="form__item">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="form__item">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="I really like your work, lets have a chat!"
                  name="message"
                  required
                />
              </div>
              <Button type="submit" variant="contained" color="success">
                <h1>Send!</h1>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbottom;
