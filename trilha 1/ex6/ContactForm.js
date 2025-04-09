import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
