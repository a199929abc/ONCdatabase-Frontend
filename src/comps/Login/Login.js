import React, {useState,useEffect, Fragment} from 'react';
import { Grid, Paper, TextField, Button, responsiveFontSizes } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import logo from '../../img/logo.jpg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Alert } from 'antd';
import {BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';


const paperStyle ={ padding: 20, height: '70vh', width: 320, margin: "20px auto" };
const textFieldStyle= {height:'15vh',width:230,focus:true,blur:true}
const avatarStyle ={ backgroundColor: "#20b2aa", width: 30,height:30 }

function Login() {

    const [userName,setuserName]=useState("");
    const [userPassword,setuserPassword]=useState("");
    const [loginError, setloginError]=useState("");
    const [returnState,setReturnState]=useState(0);
    
    

const submitHandler = e =>{
    e.preventDefault();
    const userJSON={
        username: userName,
        password: userPassword
    };
    GetLoginResponse(userJSON);
};


const GetLoginResponse = async(userJSON)=>{
    console.log(userJSON);
    var res= await axios({
    method: 'POST',
    url: 'http://142.104.17.117:8011/login',
    headers: { 'Content-Type': 'application/json','Accept': 'application/json'},
    data: JSON.stringify(userJSON)
    }).then(Response=>{{return Response.data.status}});
    console.log(res);
    setReturnState(res);
    
    }
    useEffect(() => {
        console.log('Login state change to: ', returnState);
  
     }, [returnState]);
/* useEffect(()=>{
  
    const loginRequest = async ()=>{
    var res= await axios({
            method: 'POST',
            url: 'http://142.104.107.176:8011/login',
            headers: { 'Content-Type': 'application/json','Accept': 'application/json'},
            data: JSON.stringify({ username : userName,
                password : userPassword})}).then(Response=>{return Response.data.status;});
            setReturnState(res);
    }
    loginRequest();
    
},[]);
 */
    const loginCheck = () =>{
        if(returnState== 200){
            return <Redirect to='/nav' />
        }else if(returnState== 500){
                   return( <Alert
                    message="Username or password are not correct please try again."
                    type="error"
                    showIcon
                    />  )
        }else{ return <></>};
        }
    

    return (
        <Fragment>
          <form onSubmit={submitHandler}>
            <Grid className="form-inner">
                <Paper  elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle} src={logo} sizes='big' >  </Avatar>
                    
                   <h2>Project Integration</h2>
                 
                    {loginCheck()}

                  

                   <div className="form-group">
                        <TextField style={textFieldStyle}  placeholder='Enter Username' label="Username" type="text" name="name " id ="name" 
                        onChange={e => setuserName (e.target.value)} 
                        value={userName.value}/>
                    </div>


                    <div className="form-group">
                        <TextField style={textFieldStyle} placeholder='Enter Password' label="Password" 
                        type="password" name="password" id ="password"  
                        onChange={e => setuserPassword(e.target.value)}
                        value={userPassword.value}/>
                    </div>
                   
                    <Button type='submit' value="LOGIN" color='primary' fullWidth required variant='contained'>
                  Sign in</Button>
                   
                   
                </Grid>
                </Paper> 
            </Grid>
          </form>
        </Fragment>
    )
}

export default Login
