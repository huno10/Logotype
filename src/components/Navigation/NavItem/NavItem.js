import styles from './NavItem.module.css'
import SubMenuItem from './SubMenuItem/SubMenuItem'

const SUB_TITLE = ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post']

function NavItem({ title }) {

    return (
        <li className={styles.item}>
            <span className={styles.name}>{title}</span>
            <img className={styles.itemImg} src="./imeges/Arrow.svg" alt="arrow" />
            <ul className={styles.submenu}>
                {SUB_TITLE.map((name) => (
                    <SubMenuItem key={name} title={name} />
                ))}
            </ul>
        </li>
    )
}

export default NavItem