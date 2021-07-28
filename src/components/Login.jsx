import React, { Component } from 'react';
import Logins from "../css/Login.module.css";

const Login = () => {
    return (
        <div className={Logins.container}>
            <div className={Logins.sectionMessage}></div>
            <div className={Logins.sectionInput}>
                <div  className={Logins.formAcct}>
                    <h1 className={Logins.hf}>Login</h1>
                    <form action="">
                        <label htmlFor="email">E-mail</label><br />
                        <div className={Logins.bx}>
                            <input type="email" className={Logins.inputEmail} id="email" name="email" /><br />
                            <img className={Logins.mailImg} src="/images/mail_black.svg" alt="mail" />
                        </div>
                        <label htmlFor="pass">Password</label><br />
                        <div className={Logins.pbx}>
                            <img className={Logins.key} src="/images/key_black.svg" alt="key" />
                            <input type="password" className={Logins.inputStylep} id="pass" name="password" required /><br />
                            <img className={Logins.mailImgs} src="/images/visibility_black.svg" alt="mail" />
                        </div>
                        <p className={Logins.fg}>Forgot Password?</p>
                        <input type="submit" className={Logins.inputSubmit} value="Login" />
                    </form>
                    <p className={Logins.bt}>Don't have an account? <span><a href="#">Click here</a></span></p>
                </div> 
            </div>
        </div>
    );
}
 
export default Login;