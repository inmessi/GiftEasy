import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqLMmkVvSMwrdnQwlvXVpzFdpDXfFlKzbxLvxxtLJSDHKrwfMLwpxvdphxvCkddWMhmjV">
        <Button>Email address: csuddhasil@gmail.com</Button>
      </a>
      <div className="contactno">
        <h1>Contact Number: 9874835785</h1>
      </div>
    </div>
  );
};

export default Contact;
