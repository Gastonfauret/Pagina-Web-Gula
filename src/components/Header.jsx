import logo from '../assets/Logo Gula Blanco PNG.png';
import profile from '../assets/User-Milagros.png'
import {Link} from 'react-router-dom';
import '../styles/Home-Page.css'

function Header() {
    return (
        <>
            <div className="header-container">
                <img src={logo} alt="Logo Gula" />

                <ul className='nav-pages'>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/listados'>Listados</Link></li>
                    <li><Link to='/nosotros'>Nosotros</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                    <li><Link to='/salir'>Salir</Link></li>
                </ul>
                
                <div className="user-container">
                    <p className="user">Bienvenida Milagros</p>
                    <img className="user-profile" src={profile} alt="User Profile photo" />
                </div>
            </div>
            <nav>
                
            </nav>
        </>
    )
}

export default Header

