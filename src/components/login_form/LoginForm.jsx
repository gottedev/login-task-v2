import React, { useState } from "react";
import { Card, Input, Button, Checkbox, Form } from "antd";
import Logo from "../../logo.svg";
import "./LoginForm.scss";
import "antd/dist/antd.css";

const LoginForm = () => {
  const onFinish = () => {
    alert("thanks for coding challenge");
  };
  return (
    <div className="Login-Container">
      <Card className="Card-Container" style={{ width: 320 }}>
        <div className="Logo-Container">
          <img src={Logo} alt="Green Energy Logo" />
        </div>
        <div className="Title-Container">
          <h2>Example login screen</h2>
          <p>&nbsp;Getting started with Green.</p>
        </div>
        <Form
          layout="vertical"
          name="normal_login"
          className="Login-Form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item className="Login-Email" label="Email Address">
            <Input placeholder="Enter your Email Address" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember this device</Checkbox>
          </Form.Item>

          <Form.Item className="Login-Button">
            <Button type="primary">Sign In</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
