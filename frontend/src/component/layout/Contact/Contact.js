import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
      <body>
    <div className="contactContainer">
      <a className="mailBtn" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqLMmkVvSMwrdnQwlvXVpzFdpDXfFlKzbxLvxxtLJSDHKrwfMLwpxvdphxvCkddWMhmjV">
        <Button>Email address: csuddhasil@gmail.com</Button><br/>
      </a>
      <Button className="contactBtn">Contact Number: 9874835785</Button>
   </div>
      </body>
  );
};

export default Contact;
