import { Link } from 'react-router-dom'
import styles from "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li><Link to={`/`}>Quem somos</Link></li>
            <li><Link to={`/pag2`}>Home</Link></li>
            <li><Link to={`/pag3`}>Livros</Link></li>
            <li><Link to={`/pag4`}>Cadastro</Link></li>
            <li><Link to={`/pag5`}>Login</Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar