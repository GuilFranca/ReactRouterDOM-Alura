import styles from "./Menu.module.css"
import MenuLink from "../MenuLink"

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegation}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobre-mim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}