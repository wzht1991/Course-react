import React from "react";
import { Icon, Input, Button } from "antd";
import "./Login.css";
export default class Login extends React.Component {
  render() {
    return (
      <div className="logIn">
        <h1> 登录</h1>
        <Input
          className="userName"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="请输入你的Email"
        />
        <Input
          className="password"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="请输入密码"
        />
        <div className="button">
          <Button className="loginButton" type="primary">登录</Button>
          <Button className="registerButton" type="primary">注册</Button>
        </div>
      </div>
    );
  }
}
