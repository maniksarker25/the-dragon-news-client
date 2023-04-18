import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="my-2 w-100" variant="outline-primary">
        {" "}
        <FaGoogle /> Login With Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        {" "}
        <FaGithub /> Login With Github
      </Button>
      <div className="mt-3">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebookF/>  Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/>  Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/>  Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
