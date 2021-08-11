import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";

const PreviewModal = ({ img, name, price }) => {
    const styleClickedBtnLeft = {
        backgroundColor: '#bcac76',
        border: '1px solid black'
    }
    const styleClickedBtnRight = {
        backgroundColor: '#bcac76',
        border: '1px solid black'
    }
    const styleUnclickedBtnLeft = {
        backgroundColor: 'unset',
        border: '1px solid #bcac76'
    }
    const styleUnclickedBtnRight = {
        backgroundColor: 'unset',
        border: '1px solid #bcac76'
    }
    const styleClickedTxtLeft = {
        color: 'black'
    }
    const styleClickedTxtRight = {
        color: 'black'
    }
    const styleUnclickedTxtLeft = {
        color: '#bcac76'
    }
    const styleUnclickedTxtRight = {
        color: '#bcac76'
    }

    const [leftBtn, setLeftBtn] = useState(styleUnclickedBtnLeft)
    const [rightBtn, setRightBtn] = useState(styleUnclickedBtnRight)
    const [leftTxt, setLeftTxt] = useState(styleUnclickedTxtLeft)
    const [rightTxt, setRightTxt] = useState(styleUnclickedTxtRight)

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    function unToggleLeft(){
        setLeftBtn(prev=>prev=styleUnclickedBtnLeft)
        setLeftTxt(prev=>prev=styleUnclickedTxtLeft)
    }
    function unToggleRight(){
        setRightBtn(prev=>prev=styleUnclickedBtnRight)
        setRightTxt(prev=>prev=styleUnclickedTxtRight)
    }
    function toggleLeft(){
        setLeftBtn(prev=>prev=styleClickedBtnLeft)
        setLeftTxt(prev=>prev=styleClickedTxtLeft)
        unToggleRight()
    }
    function toggleRight(){
        setRightBtn(prev=>prev=styleClickedBtnRight)
        setRightTxt(prev=>prev=styleClickedTxtRight)
        unToggleLeft()
    }

    function handleLeftClick(){
        JSON.stringify(leftBtn) == JSON.stringify(styleClickedBtnLeft) ? unToggleLeft() : toggleLeft();
    }

    function handleRightClick(){
        JSON.stringify(rightBtn) == JSON.stringify(styleClickedBtnRight) ? unToggleRight() : toggleRight();
    }

    const LeftButton = () => {
        return (
            <div  onClick={()=>{handleLeftClick()}} className="__btn" style={leftBtn}>
                <h5 style={leftTxt}>HOODIE</h5>
            </div>
        )
    }
    const RightButton = () => {
        return (
            <div  onClick={()=>{handleRightClick()}} className="__btn" style={rightBtn}>
                <h5 style={rightTxt}>COLLEGE</h5>
            </div>
        )
    }

   
    return (
        <>
            <i onClick={onOpenModal}  class="fas fa-expand-arrows-alt"></i>
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
                            <option class="dropdown-item" >SMALL</option>
                            <option class="dropdown-item" >MEDIUM</option>
                            <option class="dropdown-item" >LARGE</option>
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

export default PreviewModal;
