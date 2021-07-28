import React, { Component } from 'react';
import CreateAcct from "../css/CreateAcc.module.css";

const CreateAcc = () => {
    return (
        <div className={CreateAcct.container}>
            <div className={CreateAcct.sectionMessage}></div>
            <div className={CreateAcct.sectionInput}>
                <div  className={CreateAcct.formAcct}>
                    <h1 className={CreateAcct.hf}>Create Account</h1>
                    <form action="">
                        <label className={CreateAcct.lb} htmlFor="fullName">Full name</label><br></br>
                        <input type="text" className={CreateAcct.inputStyle} id="fullName" name="fullName" /><br />
                        <label htmlFor="email">Email Address</label><br />
                        <input type="email" className={CreateAcct.inputStyle} id="email" name="email" /><br />
                        <label htmlFor="phone">Phone Number</label><br />
                        <input type="tel" className={CreateAcct.inputStyle} id="phone" name="phone"/><br />
                        <label htmlFor="pass">Password</label><br />
                        <div className={CreateAcct.pbx}>
                            <input type="password" className={CreateAcct.inputStylep} id="pass" name="password" required /><br />
                            <img className={CreateAcct.mailImg} src="/images/visibility_black.svg" alt="mail" />
                        </div>
                        <input type="submit" className={CreateAcct.inputSubmit} value="Sign up" />
                    </form>
                    <p className={CreateAcct.bt}>You have an account? <span><a href="#">Click here</a></span></p>
                </div>
                
            </div>
        </div>
    );
}
 
export default CreateAcc;