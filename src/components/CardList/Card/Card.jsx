import { useEffect, useState } from 'react';
import styles from './Card.module.css'
import CardInfo from './CardInfo/CardInfo';

function Card({ data }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(prev => !prev);
    };

    useEffect(() => {
        console.log('isModalOpen changed:', isModalOpen);
    }, [isModalOpen]);

    return (
        <li className={styles.container} onClick={openModal}>
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

                {isModalOpen && <CardInfo cardData={data} onClose={closeModal} />}
            </div>
        </li >
    )
}

export default Card;