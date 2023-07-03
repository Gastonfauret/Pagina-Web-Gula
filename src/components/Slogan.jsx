import logo from '../assets/Logo Gula Blanco PNG.png';
import '../styles/App.css';

function Slogan() {

    return (
        <>
            <div className="left-container">
                <p className='login-page-text'>Bienvenido/a!<br />
                    a la primera App<br />
                    de pedidos de<br />
                    Benito Juárez</p>
                <div className="divisor-line"></div>
                <div className="slogan-container">
                    <p className="login-page-text">Tenes Hambre?<br />
                        tenes</p>
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    )
}

export default Slogan