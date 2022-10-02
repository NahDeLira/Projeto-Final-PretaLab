import { Link } from 'react-router-dom'
import styles from './menu.module.css'


function Menu () {
    return(
     <nav className={styles.navcontain}> 
        <h2 className={styles.font}><Link to="/">Home</Link></h2>
        <h2 className={styles.font}><Link  to="/receitas">Receitas</Link></h2>
        <h2 className={styles.font}><Link to="/comentarios">Comentários</Link></h2>
        <h2 className={styles.font}><Link to="/contatos">Contato</Link></h2>
      </nav>
    )
}

export default Menu

