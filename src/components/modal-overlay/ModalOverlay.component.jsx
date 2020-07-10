import React from 'react'
import ReactDOM from 'react-dom'

import './modal-overlay.style.scss'

const ModalOverlay = ({showModal}) => {
    const content = <div
        onClick={showModal(false)}
        className="modal-overlay" />

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

export default ModalOverlay