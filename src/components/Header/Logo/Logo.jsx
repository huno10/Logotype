import { useEffect, useRef, useState } from 'react';
import styles from './Logo.module.css'
import { useSearchContext } from '../../../hooks/useSearchContext';

function Logo({ setIsOpen }) {
    const [isInputOpen, setIsInputOpen] = useState(false);
    const inputRef = useRef(null);

    const { searchValue, handleInputChange } = useSearchContext();

    const toggleInput = () => {
        setIsInputOpen(!isInputOpen);
        if (!isInputOpen) {
            handleInputChange(''); 
        }
    };

    const handleInput = (e) => {
        handleInputChange(e.target.value);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setIsInputOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    return (
        <div className={styles.container}>
            <img className={styles.burgerBtn} src="./imeges/BurgerBtn.svg" alt="" onClick={() => setIsOpen(true)} />
            <img src="./imeges/Logo.svg" alt="logo" />
            <img className={styles.serach__btn} src="./imeges/Search.svg" alt="search button" onClick={toggleInput} />
            {isInputOpen && (
                <div className={styles.inputWrapper} ref={inputRef}>
                    <input className={styles.input}
                        type="text"
                        value={searchValue}
                        onChange={handleInput}
                        placeholder="Поиск"
                    />
                </div>
            )}
        </div>
    )
}

export default Logo;