import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import ownerprofile from "../../../images/ownerprofile.png";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/chatterjeesuddhasil/";
  };
  const visitLinkedin = () => {
      window.location = "https://www.linkedin.com/in/suddhasilchatterjee/";
  }
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={ownerprofile}
              alt="Founder"
            />
            <Typography>Suddhasil Chatterjee</Typography>
      <span>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <Button onClick={visitLinkedin} color="primary">
                Visit Linkedin
            </Button>
      </span>
            <span>
              Gift Item Seller
            </span>
          </div>
         
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
