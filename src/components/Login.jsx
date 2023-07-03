import { useState } from "react";

import Slogan from './Slogan';
import VerticalDivider from './VerticalDivider';

import '../styles/App.css';



function Login() {
    document.body.style = 'background-color: red';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let errorMessageUser = validationUser(email);
    let errorMessagePassword = validationPassword(password);

    return (
        <>
            <div className="components-container">
                <Slogan />
                <VerticalDivider />
                <div className="right-container">
                    <p className="login-page-text">Ingresar</p>

                    <form onSubmit={(ev) => {
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
                        <p className="login-text">Usuario</p>

                        <input
                            id='input-user2'
                            name='password'
                            type="password"
                            placeholder='Contraseña'
                            value={password}
                            onChange={ev => setPassword(ev.target.value)
                            } />

                        <p className='error-message'>{errorMessagePassword}</p>
                        <p className="login-text">Contraseña</p>
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
    ) return (alert('Login Correcto'), window.location.href = '/inicio');
    else alert('Usuario y/o Contraseña Incorrecta');
}

const validationUser = (email) => {
    if (email.length > 0 && email.length < 9 && !email.includes('@')) return 'Email Incorrecto';
    else ('');
}

const validationPassword = (password) => {
    if (password.length > 0 && password.length < 5) return 'Contraseña Incorrecta';
    else ('');
}

//<Link to={'/inicio'}></Link>

export default Login;