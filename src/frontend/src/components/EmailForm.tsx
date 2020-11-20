import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { useForm, Controller } from "react-hook-form";

export default function EmailForm(): JSX.Element {
  const { control, handleSubmit } = useForm();

  const onSubmit = (values: any) => {
    console.log(`Success: ${values}`);
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
        ></Input.Search>
      </Col>
    </Row>
  );
}
