import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";

const PreviewModal = ({ img, name, price }) => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
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
                        <div class="dropdown">
                            <div class="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <div className="__menu">
                                <option class="dropdown-item" type="button">SMALL</option>
                                <option class="dropdown-item" type="button">MEDIUM</option>
                                <option class="dropdown-item" type="button">LARGE</option>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default PreviewModal;
