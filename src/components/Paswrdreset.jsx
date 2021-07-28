import React, { Component } from 'react';
import Passreset from "../css/Paswrdreset.module.css";

const Paswrdreset = () => {
    return (
        <div className={Passreset.container}>
            <div className={Passreset.sectionMessage}></div>
            <div className={Passreset.sectionInput}>
                <div  className={Passreset.formAcct}>
                    <h1 className={Passreset.hf}>Forgot Password</h1>
                    <h3 className={Passreset.rpxt}>Enter your email receive link to reset password</h3>
                    <form action="">
                        <label htmlFor="email">E-mail</label><br />
                        <div className={Passreset.bx}>
                            <input type="email" className={Passreset.inputEmail} id="email" name="email" /><br />
                            <img className={Passreset.mailImg} src="/images/mail_black.svg" alt="mail" />
                        </div>
                        <input type="submit" className={Passreset.inputSubmit} value="Submit" />
                    </form>
                </div> 
            </div>
        </div>
    );
}
 
export default Paswrdreset;