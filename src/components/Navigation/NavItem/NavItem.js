import styles from './NavItem.module.css'
import SubMenuItem from './SubMenuItem/SubMenuItem'

function NavItem({ title }) {

    const subTitle = ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post']

    return (
        <li className={styles.item}>
            <span className={styles.name}>{title}</span>
            <img className={styles.itemImg} src="./imeges/Arrow.svg" alt="arrow" />
            <ul className={styles.submenu}>
                {subTitle.map((name) => (
                    <SubMenuItem key={name} title={name} />
                ))}
            </ul>
        </li>
    )
}

export default NavItem