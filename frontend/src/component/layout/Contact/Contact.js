import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
    <abbr title="Click here to mail Suddhasil Chatterjee" className = 'abbr'>
      <a className="mailBtn" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqLMmkVvSMwrdnQwlvXVpzFdpDXfFlKzbxLvxxtLJSDHKrwfMLwpxvdphxvCkddWMhmjV">
        <Button>Email address: csuddhasil@gmail.com</Button>
      </a>
      </abbr>
   </div>
  );
};

export default Contact;
