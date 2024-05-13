import React, { useRef } from 'react';

import styles from './CardInfo.module.css'
import { createPortal } from 'react-dom';
import useCloseBlock from './../../hooks/useCloseBlock';
import { useModalContex } from '../../context/modal-context';


const modalElement = document.getElementById('modal-card')

function CardModal() {

    const modalRef = useRef(null);
    const { isOpen, title, text, closeModal } = useModalContex()

    useCloseBlock(modalRef, () => {
        closeModal();
    });


    return isOpen ? createPortal(
        (
            <div className={styles.modal}>
                <div className={styles.modalContent} ref={modalRef}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                    <button onClick={closeModal}>Закрыть</button>
                </div>
            </div>
        ), modalElement
    ) : null;
}

export default CardModal;