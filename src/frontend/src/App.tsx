import React, { Component } from "react";
import logo from "./assets/logo.png";
import Helmet from "react-helmet";
import {
  Button,
  Container,
  Row,
  Col,
  Jumbotron,
  Image,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

async function callExpress() {
  try {
    const response = await fetch("/api").then((res) => res.json());
    alert("This is a response from the backend: " + response.response);
  } catch (err) {
    alert(err);
  }
}

function App(): JSX.Element {
  return (
    <div className="App">
      <Helmet>
        <style type="text/css">{`
      body {
          background-color: #94CDF0;
      }
      `}</style>
      </Helmet>
      <Container>
        <Row className="h-100 align-items-center justify-content-center">
          <Jumbotron className="col-8 text-center">
            <Row className="justify-content-center">
              <Col xs="4">
                <Image src={logo} fluid />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col>
                <h1>Coming Soon!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
            </Row>
            <hr className="my-3"></hr>
            <Form>
              <Form.Row className="align-items-center justify-content-center">
                <Col xs="8">
                  <Form.Group controlId="formEmail" className="text-left">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center justify-content-center">
                <Col xs="8">
                  <Form.Check
                    type="checkbox"
                    label="Do you want more information about our studies?"
                    id="more-info"
                  />
                </Col>
              </Form.Row>
              <Button variant="primary" type="submit" className="my-3">
                Sign Up
              </Button>
            </Form>
          </Jumbotron>
        </Row>
      </Container>
    </div>
  );
}

export default App;
