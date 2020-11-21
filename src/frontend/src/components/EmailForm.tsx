import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import axios from "axios";

export default function EmailForm(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const onSubmit = (value: any) => {
    setLoading(true);
    axios.post("/api/emailsignup", { value }).then((res) => {
      alert(`Success: ${value}`);
      setLoading(false);
    });
  };

  const onChangeBox = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row align="middle" justify="center">
      <Col xs={20} md={16} lg={12}>
        <Input.Search
          placeholder="Email address"
          enterButton="Sign Up"
          size="large"
          onSearch={onSubmit}
          loading={loading}
        ></Input.Search>
      </Col>
    </Row>
  );
}
