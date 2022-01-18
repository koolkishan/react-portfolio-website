import React from "react";
import styled from "styled-components";
function Contact() {
  return (
    <Section>
      <div className="title"></div>
      <div className="contact__content">
        <div className="contact__content__title">
          <p>Stay in touch with us</p>
          <h2>Contacto ipsam donec setem quia lipsum</h2>
        </div>
        <div className="contact__content__data">
          <div className="contact__content__data__description">
            <h4>Use from on the right to contact us or just to say hi!</h4>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="contact__content__data__form">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message" cols="30" rows="10"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
`;

export default Contact;
