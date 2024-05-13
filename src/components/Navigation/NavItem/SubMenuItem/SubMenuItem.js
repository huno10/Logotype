import styles from './SubMenuItem.module.css'

function SubMenuItem({ title }) {
    return (
        <li className={styles.subMenuItem}>
            <span className={styles.subMenuName}>{title}</span>
            <img src="./imeges/ArrowSubMenu.svg" alt="arrow" />
        </li>

    )
}

export default SubMenuItem