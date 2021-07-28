import React, { Component } from 'react';
import ForgetPasswrd from "../css/ForgetPass.module.css";

const ForgetPassword = () => {
    return (
        <div className={ForgetPasswrd.container}>
            <div className={ForgetPasswrd.sectionMessage}></div>
            <div className={ForgetPasswrd.sectionInput}>
                <div  className={ForgetPasswrd.formAcct}>
                    <h1 className={ForgetPasswrd.ht}>Forgot Password</h1>
                    <h2 className={ForgetPasswrd.es}>Email Sent</h2>
                    <p className={ForgetPasswrd.textR}>Check your email for link to<br />reset password</p>
                    <button className={ForgetPasswrd.btn}>Back</button>
                </div>
            </div>
        </div>
    );
}
 
export default ForgetPassword;