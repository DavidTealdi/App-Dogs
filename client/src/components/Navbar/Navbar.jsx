import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <NavLink className={styles.navL} to='/home'> Home </NavLink>
            <NavLink className={styles.navL} to='/create'>Create Dog</NavLink>
        </div>
    )
}

export default NavBar