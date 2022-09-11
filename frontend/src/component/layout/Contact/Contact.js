import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="csuddhasil@gmail.com">
        <Button>Contact: csuddhasil@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
