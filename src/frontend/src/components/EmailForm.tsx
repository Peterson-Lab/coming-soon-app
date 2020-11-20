import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form } from "react-bootstrap";

export default function EmailForm(): JSX.Element {
  const [email, setEmail] = useState("");

  const validateForm = () => {
    return email.length > 0;
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <Form>
      <Form.Row className="align-items-center justify-content-center">
        <Col xs="8">
          <Form.Group controlId="formEmail" className="text-left">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
      <Button
        variant="primary"
        type="submit"
        className="my-3"
        disabled={!validateForm()}
      >
        Sign Up
      </Button>
    </Form>
  );
}
