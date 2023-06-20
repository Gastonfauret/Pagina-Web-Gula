import React from 'react';
import '../styles/App.css'
import logo from '../assets/Logo Gula Blanco PNG.png';

function LoginPageComponent() {
    return (
        <>
            <div className="components-container">
                <div className="left-container">
                    <p className='message'>Bienvenido/a!<br />
                        a la primera App<br />
                        de pedidos de<br />
                        Benito Juárez</p>
                    <div className="divisor-line"></div>
                    <div className="slogan-container">
                        <p className="slogan">Tenes Hambre?<br />
                            tenes</p>
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="vertical-divisor-line"></div>

                <div className="right-container">
                    <p>Ingresar</p>
                    <form action="">
                    </form>
                    <input id='input-user' type="email" />
                    <p className='error-message'>Usuario Incorrecto</p>
                    <p id='title-user'>Usuario</p>
                    <input id='input-user2' type="password" />
                    <p className='error-message'>Contraseña Incorrecta</p>
                    <p id='title-user2'>Contraseña</p>
                    <button id='boton-enviar' type='submit'>Ingrese</button>                   
                </div>
            </div>
        </>
    )
}

export default LoginPageComponent