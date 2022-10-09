import React from 'react';
import icon from './images/cryptocurrency.png';
import { Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';


const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passowrdError,
        signInWithGoogle 
    } = props;

    return(
        <selection className="login">
            <div className="loginContainer">
                <div className="loginLogo-container">
                    <Avatar src={icon} size="large" />
                    <Typography.Title level={2} className="logo" >
                        <Link to="/">CoinRaise</Link> 
                    </Typography.Title>
                </div>
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passowrdError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button class="loginBtn" onClick={handleLogin}>Sign In</button>
                        <div><br /></div>
                        <button class="loginBtn" onClick={signInWithGoogle}>Sign In with Google</button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button class="loginBtn" onClick={handleSignup}>Sign Up</button>
                        <div><br /></div>
                        <button class="loginBtn" onClick={signInWithGoogle}>Sign Up with Google</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}

                </div>

            </div>

        </selection>
    )
};

export default Login;