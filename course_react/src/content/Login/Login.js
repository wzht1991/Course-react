import React from "react";
import { Icon, Input, Button,Radio } from "antd";
import 'antd/dist/antd.css';
import "./Login.css";
export default class Login extends React.Component {
  render() {
    const{Email,EmailOnChange,Password,Status,PasswordOnChange,StatusOnchange,ClickLogin}=this.props;
    return (
      <div className="logIn">
        <h1> 登录</h1>
        <Input
          className="userName"
          prefix={<Icon type="user" 
          style={{ color: "rgba(0,0,0,.25)" }} />}
          value={Email}
          onChange={EmailOnChange}
          placeholder="请输入你的Email"
        />
        <Input
          className="password"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          value={Password}
          onChange={PasswordOnChange}
          placeholder="请输入密码"
        />
        <div className="radioGroup">
        <Radio.Group value={Status} onChange={StatusOnchange}>
        <Radio style={{marginRight:60}} value="teacher">teacher</Radio>
        <Radio value="student">student</Radio>
        </Radio.Group>
        </div>
        <div className="button">
          <Button className="loginButton" type="primary" onClick={ClickLogin}>登录</Button>
          <Button className="registerButton" type="primary">注册</Button>
        </div>
      </div>
    );
  }
}
