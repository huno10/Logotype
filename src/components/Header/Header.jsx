import Logo from "./Logo/Logo";
import styles from './Header.module.css'
import { useEffect, useRef } from "react";

function Header({ isOpen, setIsOpen, setHeaderHeight }) {

    const headerRef = useRef(null);

    useEffect(() => {
        const height = headerRef.current.clientHeight;
        setHeaderHeight(height);
    }, [setHeaderHeight]);

    return (
        <header className={styles.header} ref={headerRef}>
            <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}

export default Header;
