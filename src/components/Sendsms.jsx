import React, { Component } from 'react';
import Sms from "../css/Sendsms.module.css";

const Sendsms = () => {
    return (
        <div className={Sms.container}>
            <div className={Sms.navigation}>
                <div className={Sms.logoBox}>
                     
                </div>
                <ul className={Sms.nav}>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                            <img className={Sms.navImg} src="/images/portal.svg" alt="mail" />
                            <span>Portal</span>
                        </a>
                    </li>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                            <img className={Sms.navImg} src="/images/message-shape.svg" alt="mail" />
                            <span>Sent Messages</span>
                        </a>
                    </li>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                            <div className={Sms.contDy}>
                                <img className={Sms.sort} src="/images/sort.svg" alt="mail" />
                                <img className={Sms.navImg} src="/images/message-shape.svg" alt="mail" />
                            </div>
                            <span>Dynamic Messages</span>
                        </a>
                    </li>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                        <div className={Sms.contShd}>
                                <img className={Sms.shedule} src="/images/shape-shedule.svg" alt="mail" />
                                <img className={Sms.navImg} src="/images/message-shape.svg" alt="mail" />
                        </div>                            
                        <span>Scheduled SMS</span>
                        </a>
                    </li>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                            <img className={Sms.navImg} src="/images/drafts.svg" alt="mail" />
                            <span>Drafts</span>
                        </a>
                    </li>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                            <img className={Sms.navImg} src="/images/group.svg" alt="mail" />
                            <span>Phone group</span>
                        </a>
                    </li>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                            <div className={Sms.contImg}>
                                <img className={Sms.navImg} src="/images/path.svg" alt="mail" />
                                <img className={Sms.navImgs} src="/images/path-inside.svg" alt="mail" />
                            </div>
                            <span>Assign SMS</span>
                        </a>
                    </li>
                    <li className={Sms.navList}>
                        <a href="#" className={Sms.navA}>
                        <div className={Sms.contHlp}>
                                <img className={Sms.navImg} src="/images/settings.svg" alt="mail" />
                                <img className={Sms.angle} src="/images/triangle.svg" alt="mail" />
                        </div>
                        <span>Help</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className={Sms.main}>
                <div id="notification" className={Sms.topNav}>
                    <ul className={Sms.topList}>
                    <li className={Sms.topItems}>
                            <a href="#" className={Sms.topA}>
                                <img className={Sms.topImg} src="/images/search.svg" alt="mail" />
                            </a> 
                        </li>
                        <li className={Sms.topItems}>
                            <a href="#" className={Sms.topA}>
                                <img className={Sms.topImg} src="/images/notifications.svg" alt="mail" />
                                <span className={Sms.imgNot}>7</span>
                            </a> 
                        </li>
                        <li className={Sms.topItems}>
                            <a href="#" className={Sms.topA}>
                                <img className={Sms.topImg} src="/images/exit-to-app.svg" alt="mail" />
                            </a> 
                        </li>
                    </ul>
                </div>
                    <h3 className={Sms.headText}>Send Sms</h3>
                <div className={Sms.contRow}>
                    <div className={Sms.formRow}>
                        <form action="#" className={Sms.contForm}>
                            <div className={Sms.senderD}>
                                <input className={Sms.senderId} type="text" name="phoneId" placeholder="Enter Sender ID" />
                            </div>
                            <div className={Sms.senderC}>
                                <input className={Sms.senderContact} type="text" name="phoneId" placeholder="Type Phone Number" />
                            </div>
                            <div className={Sms.btnGroup}>
                                <button className={Sms.btnFile}>Upload file</button>
                                <button className={Sms.btnPhone}>Select phone group</button>
                            </div>
                            <div className={Sms.mess}>
                            <textarea className={Sms.messText} name="text" type="text" rows="4" cols="50" placeholder="Type Message" />
                            </div>
                            <div className={Sms.btnCont}>
                                <input type="submit" value="Send" className={Sms.btnSmt} />
                                <img src="/images/send.svg" alt="send" className={Sms.imgSub} />
                                <span className={Sms.textAlert}>160 character left</span>
                            </div>
                        </form>
                        <div className={Sms.btnBottom}>
                            <a href="#" className={Sms.btnBtm}>
                                <img className={Sms.imgBtn} src="/images/mail_black.svg" alt="mail" />
                                <span>Schedule Send</span>
                            </a> 
                            <a href="#" className={Sms.btnBtms}>
                                <img className={Sms.imgBtns} src="/images/save.svg" alt="mail" />
                                <span>Save As Draft</span>
                            </a> 
                        </div>
                    </div>
                    <div className={Sms.asideContainer}>
                        <div className={Sms.asideTop}>
                            <div>
                                <img src="/images/profile-pics.svg" alt="profile" className={Sms.profilePics} />
                            </div>
                            <h3 className={Sms.profileHeading}>Welcome</h3>
                            <span className={Sms.profileName}>Olamide Badmus</span>
                            <span className={Sms.profileCount}>200,000</span>
                            <span className={Sms.countBalance}>Balance</span>
                            <div className={Sms.contTopUp}>
                                <a href="#" className={Sms.btnTopUp}>
                                    <img src="/images/add.svg" className={Sms.imgTopUp} alt="add" />
                                    <span className={Sms.textTopUp}>Top Up</span>
                                </a>
                            </div>
                        </div>
                        <div className={Sms.asideBtm}>
                            <span className={Sms.messageFig}>201</span>
                            <h3 className={Sms.figText}>Sent Messages</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sendsms;