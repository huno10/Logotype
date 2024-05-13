import Logo from "./Logo/Logo";
import Navigation from '../Navigation/Navigation';

import styles from './Header.module.css'

function Header({ isOpen, setIsOpen }) {
    return (
        <header className={styles.header}>
            <Logo isOpen={isOpen} setIsOpen={setIsOpen} />

        </header>
    )
}

export default Header;
