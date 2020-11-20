import React from "react";
import "./App.css";
import { Row, Col, Card, Image, Form, Divider } from "antd";
import Helmet from "react-helmet";
import logo from "./assets/logo.png";
import EmailForm from "./components/EmailForm";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Row align="middle" justify="center" className="row">
        <Col xs={22} md={16} lg={12}>
          <div className="hero">
            <Row justify="center">
              <Col xs={20}>
                <Image src={logo} className="logo" />
                <h1>Coming Soon!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Divider></Divider>
              </Col>
            </Row>
            <EmailForm />
          </div>
        </Col>
      </Row>
    </div>
  );
}
