import styles from './Navigation.module.css'
import useSetScroll from '../../hooks/useSetScroll';
import NavItem from './NavItem/NavItem';
import useCloseBlock from '../../hooks/useCloseBlock';
import { useRef } from 'react';

const MENU_ITEMS = ['Demos', 'Post', 'Features', 'Categories', 'Shop', 'Buy Now']

function Navigation({ isOpen, setIsOpen, headerHeight }) {
    const navRef = useRef(null);

    const scrollPixel = headerHeight + 200

    const isSticky = useSetScroll(scrollPixel)

    useCloseBlock(navRef, () => {
        setIsOpen(false);
    });

    const clsx = [styles.nav]

    if (!isSticky) {
        clsx.push(styles.stickyTransform)
    }

    if (isOpen) {
        clsx.push(styles.navActive)
    }

    return (
        <nav className={clsx.join(" ")} >
            <div className={styles.container} ref={navRef}>
                <div className={styles.wrapper}>
                    <img src="./imeges/Logo768.svg" alt="logo" />
                    <img className={styles.navBtn} src="./imeges/CloseBtn.svg" alt="close button" onClick={() => setIsOpen(false)} />
                </div>
                <ul className={styles.list}>
                    {MENU_ITEMS.map((title) => (
                        <NavItem key={title} title={title} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
