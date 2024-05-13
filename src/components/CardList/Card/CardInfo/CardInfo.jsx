import React, { useRef } from 'react';

import styles from './CardInfo.module.css'
import { createPortal } from 'react-dom';
import useCloseBlock from '../../../../hooks/useCloseBlock';


const modalElement = document.getElementById('modal-card')

function CardModal({ cardData, onClose }) {
    const modalRef = useRef(null);

    useCloseBlock(modalRef, () => {
        onClose();
    });


    return createPortal(
        (
            <div className={styles.modal}>
                <div className={styles.modalContent} ref={modalRef}>
                    <h2 className={styles.title}>{cardData.title}</h2>
                    <p className={styles.text}>{cardData.text}</p>
                    <button onClick={onClose}>Закрыть</button>
                </div>
            </div>
        ), modalElement
    );
}

export default CardModal;