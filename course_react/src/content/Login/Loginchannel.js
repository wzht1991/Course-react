import React from "react";
import Login from './Login';
import {LoginAPI} from '../../api/Login';
export default class LoginChannel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Email: "",
            Password:"",
            Status:""
        };
    }
    // 一定要记得setState 不然输入框不能输入东西的
    EmailOnChange(event){
        this.setState({Email:event.target.value});
       
    }
    PasswordOnChange(event){
        this.setState({Password:event.target.value});
        
    }
    StatusOnchange(event){
        this.setState({Status:event.target.value});
        
    } 
    ClickLogin(){
        LoginAPI(this.state.Email,this.state.Password,this.state.Status).then(data=>{
            console.log(data);
        })
    }
    render(){
        const{Email,Password,Status}=this.state;
        return(
            <Login
             Email={Email}  
             Password={Password}
             Status={Status}
             EmailOnChange={event=>{
                 this.EmailOnChange(event)
             }}
             PasswordOnChange={event=>{
                 this.PasswordOnChange(event)
             }}
             StatusOnchange={event=>{
                 this.StatusOnchange(event);
             }}
             ClickLogin={()=>{
                 this.ClickLogin();
             }}
            />
        )
    }
}