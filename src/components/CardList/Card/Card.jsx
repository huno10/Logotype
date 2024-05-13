import styles from './Card.module.css'
import { useModalContex } from '../../../context/modal-context';
import { useCallback } from 'react';

function Card({ data }) {
    const { openModal } = useModalContex()

    const onBoxClick = useCallback(() => {
        openModal({ title: data.title, text: data.text })
    }, [openModal, data.title, data.text])

    return (
        <li className={styles.container} onClick={onBoxClick}>
            <img className={styles.imeges} src={data.img} srcSet={`${data.img} 800w, ${data.img_2x} 1600w`} alt="imeges" />
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <p className={styles.interest}>{data.tags}</p>
                    <h2 className={styles.title}>{data.title}</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.dataInfo}>
                        <p className={styles.autor}>{data.autor}
                            <img className={styles.point} src="./imeges/Oval.svg" alt="point" />
                        </p>
                        <p className={styles.date}>{data.date}
                            <img className={styles.point} src="./imeges/Oval.svg" alt="point" />
                        </p>
                        <p className={styles.views}>{data.views}
                            <span>Views</span>
                        </p>
                    </div>
                    <p className={styles.text}>{data.text}</p>
                </div>
            </div>
        </li >

    )
}

export default Card;