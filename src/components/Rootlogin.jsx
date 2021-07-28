import React, { Component } from 'react';
import Loginroot from "../css/Rootlogin.module.css";

const Rootlogin = () => {
    return (
        <div className={Loginroot.container}>
            <div className={Loginroot.logoBox}>
                <span>LOGO</span> 
            </div>
            <h3 className={Loginroot.ln}>Login</h3>
            <form action="#">
                <input type="email" className={Loginroot.inputStyle} id="email" name="email" placeholder="Email Address" /><br />
                <input type="password" className={Loginroot.inputStyle} id="pass" placeholder="Password" name="password" required /><br />
                <input type="submit" className={Loginroot.inputSubmit} value="Sign In" />
            </form>
            <p className={Loginroot.bt}>no account? click here</p>
        </div>
    );
}
 
export default Rootlogin;