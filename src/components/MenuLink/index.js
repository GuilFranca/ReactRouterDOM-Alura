import { Link, useLocation } from "react-router-dom"
import styles from "./MenuLink.module.css"


export default function MenuLink({ children, to }) {
    const roteLocate = useLocation();

    return (
        <Link className={`${styles.link} ${roteLocate.pathname === to ? styles.linkSelect : null}`} to={to}>
            {children}
        </Link>
    )
}