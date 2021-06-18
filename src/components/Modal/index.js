import React from 'react';
import Modal, { useModalState } from "react-simple-modal-provider";

function Modal1({ children }) {
    const { isOpen, setOpen } = useModalState();


    return (
        <Modal id={"Modal1"} consumer={children} isOpen={isOpen} setOpen={setOpen}>
            <div className="modal-body">😆</div>
        </Modal>
    );
}

export default Modal1;