import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";

const PreviewModal = ({ img, name, price }) => {
    const styleClickedBtn = {
        backgroundColor: '#bcac76',
        border: '1px solid black'
    }
    const styleUnclickedBtn = {
        backgroundColor: 'unset',
        border: '1px solid #bcac76'
    }
    const styleClickedTxt = {
        color: 'black'
    }
    const styleUnclickedTxt = {
        color: '#bcac76'
    }

    const [styleBtn, setStyleBtn] = useState(styleUnclickedBtn)
    const [styleTxt, setStyleTxt] = useState(styleUnclickedTxt)
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [leftClick, setLeftClick] = useState(false)
    const [rightClick, setRightClick] = useState(false)

    const LeftButton = ({styleBtn,styleTxt}) => {
        return (
            <div onClick={()=>{setLeftClick(prev=>prev=!prev);setStyleTxt(prev=>prev=styleClickedTxt)}} style={styleBtn} className="__btn">
                <h5 style={styleTxt}>HOODIE</h5>
            </div>
        )
    }
    const RightButton = ({styleBtn,styleTxt}) => {
        return (
            <div onClick={()=>{setRightClick(prev=>prev=!prev);setStyleTxt(prev=>prev=styleClickedTxt)}} style={styleBtn} className="__btn">
                <h5 style={styleTxt}>COLLEGE</h5>
            </div>
        )
    }

    // function handleType() {
    //     JSON.stringify(styleBtn) == JSON.stringify(styleUnclickedBtn) ? setStyleBtn(prev => prev = styleClickedBtn) : setStyleBtn(prev => prev = styleUnclickedBtn);
    //     JSON.stringify(styleTxt) == JSON.stringify(styleUnclickedTxt) ? setStyleTxt(prev => prev = styleClickedTxt) : setStyleTxt(prev => prev = styleUnclickedTxt);
    // }

    if(rightClick==true){
        // setStyleBtn(prev=>prev=styleClickedBtn)
        // setStyleTxt(prev=>prev=styleClickedTxt)
        console.log('assskndksd ')
        return(
            <>
            <i onClick={onOpenModal} class="fas fa-expand-arrows-alt"></i>
            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <div className="container __preview">
                    <img src={img} style={{ width: '300px', height: '300px' }} alt="" />
                    <div className="__description">
                        <h1>{name}</h1>
                        <h3>${price}</h3>
                        <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                        <h4>Size</h4>
                        <select>
                            <option class="dropdown-item" type="button">SMALL</option>
                            <option class="dropdown-item" type="button">MEDIUM</option>
                            <option class="dropdown-item" type="button">LARGE</option>
                        </select>
                        <h4>Type</h4>
                        <div className="__buttons">
                            <LeftButton/>
                            <RightButton button={styleBtn} text={styleTxt}/>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
        )
    }
    else{
        return (
            <>
                <i onClick={onOpenModal} class="fas fa-expand-arrows-alt"></i>
                <Modal
                    open={open}
                    onClose={onCloseModal}
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                >
                    <div className="container __preview">
                        <img src={img} style={{ width: '300px', height: '300px' }} alt="" />
                        <div className="__description">
                            <h1>{name}</h1>
                            <h3>${price}</h3>
                            <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                            <h4>Size</h4>
                            <select>
                                <option class="dropdown-item" type="button">SMALL</option>
                                <option class="dropdown-item" type="button">MEDIUM</option>
                                <option class="dropdown-item" type="button">LARGE</option>
                            </select>
                            <h4>Type</h4>
                            <div className="__buttons">
                                <LeftButton/>
                                <RightButton/>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }

   
}

export default PreviewModal;
