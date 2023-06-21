import React, { useState } from 'react';
import '../styles/App.css'
import logo from '../assets/Logo Gula Blanco PNG.png';

function LoginPageComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let errorMessageUser = validationUser(email);
    let errorMessagePassword = validationPassword(password);

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

                    <form onSubmit={ev => {
                        ev.preventDefault();
                        login(email, password);
                    }}>

                        <input
                            id='input-user'
                            name='email'
                            type="email"
                            placeholder='usuario@gula.com'
                            value={email}
                            onChange={ev => setEmail(ev.target.value)
                            } />

                        <p className='error-message'>{errorMessageUser}</p>
                        <p id='title-user'>Usuario</p>

                        <input
                            id='input-user2'
                            name='password'
                            type="password"
                            placeholder='Contraseña'
                            value={password}
                            onChange={ev => setPassword(ev.target.value)
                            } />

                        <p className='error-message'>{errorMessagePassword}</p>
                        <p id='title-user'>Contraseña</p>
                        <button id='boton-enviar' type='submit'>Ingrese</button>
                    </form>

                </div>
            </div>
        </>
    )
}

const login = (email, password) => {
    if (email === 'aguilar@gula.com' && password === '12345' ||
        email === 'calo@gula.com' && password === '12345' ||
        email === 'cardenas@gula.com' && password === '12345' ||
        email === 'correa@gula.com' && password === '12345' ||
        email === 'fauret@gula.com' && password === '12345' ||
        email === 'ramos@gula.com' && password === '12345'
    ) return alert('Login Correcto');
    else return alert('Usuario y/o Contraseña Incorrecta');
};

const validationUser = (email) => {
    if (email.length > 0 && email.length < 9 && !email.includes('@')) return 'Email Incorrecto';
    else ('');
}

const validationPassword = (password) => {
    if (password.length > 0 && password.length < 5) return 'Contraseña Incorrecta';    
    else ('');
}

export default LoginPageComponent