import styles from './Navigation.module.css'
import useSetScroll from '../../hooks/useSetScroll';
import NavItem from './NavItem/NavItem';
import useCloseBlock from '../../hooks/useCloseBlock';
import { useRef } from 'react';

const SCROLL__PIXEL = 340

function Navigation({ isOpen, setIsOpen }) {
    const navRef = useRef(null);


    const isSticky = useSetScroll(SCROLL__PIXEL)
    const title = ['Demos', 'Post', 'Features', 'Categories', 'Shop', 'Buy Now']

    useCloseBlock(navRef, () => {
        setIsOpen(false);
    });

    return (
        <nav className={`${styles.nav} ${isSticky ? `${styles.navSticky} ${styles.stickyTransform}` : ''} ${isOpen ? styles.navActive : ''}`} >
            <div className={styles.container} ref={navRef}>
                <div className={styles.wrapper}>
                    <img src="./imeges/Logo768.svg" alt="logo" />
                    <img className={styles.navBtn} src="./imeges/CloseBtn.svg" alt="close button" onClick={() => setIsOpen(false)} />
                </div>
                <ul className={styles.list}>
                    {title.map((title) => (
                        <NavItem key={title} title={title} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
