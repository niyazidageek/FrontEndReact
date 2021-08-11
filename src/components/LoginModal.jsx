import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";


const LoginModal = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [position, setPosition] = useState('login')
    const [colorLog, setColorLog] = useState('black')
    const [colorReg, setColorReg] = useState('black')

    const Content = () => {
        if (position == 'login') {
            setColorLog(prev => prev = '#bcac76')
            setColorReg(prev => prev = 'black')
            return (
                <>
                    <div className="__middle">
                        <div className="container">
                            <div className="__input">
                                <h4>Email</h4>
                                <input type="email" placeholder="E-mail" />
                                <div className="__password">
                                    <h4>Password</h4>
                                    <span >Forgot password?</span>
                                </div>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="__remember">
                                <input type="checkbox" name="" id="remember30" />
                                <label htmlFor="remember30">Remember me for 30 days</label>
                            </div>
                            <div className="__login">
                                <div className="__btn" id="login">
                                    <i class="fas fa-sign-in-alt"></i>
                                    <p>LOG IN</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="__bottom">
                        <div className="container">
                            <h5><span>OR</span></h5>
                            <div className="__social-media">
                                <div className="__box">
                                    <i  class="fab fa-facebook-f"></i>
                                </div>
                                <div className="__box">
                                    <i  class="fab fa-google"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            setColorLog(prev => prev = 'black')
            setColorReg(prev => prev = '#bcac76')
            return (
                <>
                <div className="__middle">
                    <div className="container">
                        <div className="__input">
                            <h4>Name</h4>
                            <input type="text" placeholder="Name" />
                            <h4>Email</h4>
                            <input type="email" placeholder="E-mail" />
                            <div className="__password">
                                <h4>Password</h4>
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="__login">
                            <div className="__btn"  id="login">
                                <i class="far fa-user"></i>
                                <p>REGISTER</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="__bottom">
                        <div className="container">
                            <h5><span>OR CONNECT WITH</span></h5>
                            <div className="__social-media">
                                <div className="__box">
                                    <i  class="fab fa-facebook-f"></i>
                                </div>
                                <div className="__box">
                                    <i  class="fab fa-google"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

    }

    return (
        <div>
            <i onClick={onOpenModal}  className="far fa-user fa-lg"></i>
            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <div className="container">
                    <div className="__upper">
                        <div className="container">
                            <h2  style={{ color: `${colorLog}` }} onClick={() => setPosition('login')}>Login</h2>
                            <h2  style={{ color: `${colorReg}` }} onClick={() => setPosition('register')}>Register</h2>
                        </div>
                    </div>
                    <Content />
                </div>
            </Modal>
        </div>
    );
}

export default LoginModal;
