import React from "react";
import '../styles/Home-Page.css'
import logo from '../assets/Logo Gula Blanco PNG.png';
import profile from '../assets/User-Milagros.png';

function HomePage() {
    return (
        <>
            <div className="HP-components-container">
                <div className="header-container">
                    <img src={logo} alt="Logo Gula" />
                    <p className="user"></p>
                    <div className="user-container">
                        <p className="user">Bienvenida Milagros</p>
                        <img className="user-profile" src={profile} alt="User Profile photo" />

                    </div>

                </div>
            </div>

        </>
    )
}
export default HomePage