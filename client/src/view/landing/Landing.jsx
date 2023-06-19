import { NavLink } from "react-router-dom"
import styles from './Landing.module.css'
import dog from '../../img/66e86d63-f5d3-4752-b019-29e28f5079a5_16-9-discover-aspect-ratio_default_0.jpg'

const Landing = () => {
    return (
        <div className={styles.divLanding}>
            <h2 className={styles.h2Land}>Web de Perros</h2>
            <NavLink className={styles.navL} to='/home'> Home </NavLink>
            <div className={styles.background} style={{ backgroundImage: `url(${dog})` }}></div>
        </div>
    )
}

export default Landing