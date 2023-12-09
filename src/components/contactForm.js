import React from 'react';

const ContactForm = () => {

  return (
    <div className="container">
      <div className="text">Un projet ? Contactez moi !</div>
      <form action="https://formsubmit.co/e59b2bed2f8d17c93dfa337bee2f7043" method="POST">
        <div className="formRow">
          <div className="inputData">
            <input type="text" id="firstName" name='firstname' required />
            <div className="underline"></div>
            <label htmlFor="firstName">Prénom</label>
          </div>
          <div className="inputData">
            <input type="text" id="lastName" name='lastname' required />
            <div className="underline"></div>
            <label htmlFor="lastName">Nom</label>
          </div>
        </div>
        <div className="formRow">
          <div className="inputData">
            <input type="text" id="email" name='email' required />
            <div className="underline"></div>
            <label htmlFor="email">Adresse mail</label>
          </div>
          <div className="inputData">
            <input type="text" id="phone" name='phone' required />
            <div className="underline"></div>
            <label htmlFor="phone">Téléphone</label>
          </div>
        </div>
        <div className="formRow">
          <div className="inputData textarea">
            <textarea id="message" name='message' rows="8" cols="80" required></textarea>
            <br />
            <div className="underline messageText"></div>
            <label htmlFor="message">Message</label>
            <br />
            <div className=" submitBtn">
              <div className="inputData">
                <div className="inner"></div>
                <input type="submit" value="Envoyer"/>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
