import React from "react";
import '../styles/Home-Page.css'
import logo from '../assets/Logo Gula Blanco PNG.png';
import profile from '../assets/User-Milagros.png'

function HomePage() {
    return (
        <>
            <div className="HP-components-container">
                <div className="header-container">
                    <img src={logo} alt="Logo Gula" />
                    <div className="user-container">
                        <p className="user">Bienvenida Milagros</p>
                        <img className="user-profile" src={profile} alt="User Profile photo" />
                    </div>
                </div>

                <div className="text-container">
                    <p className="text client">Clientes</p>
                    <div className="text-divider"></div>
                    <p className="text suppliers">Proveedores</p>
                </div>

                <div className="list-container">
                    <p className="list text lastName">Apellido</p>
                    <p className="list text name">Nombre</p>
                    <p className="list text dni">DNI</p>
                    <p className="list text address">Direccion</p>
                    <p className="list text birth">Fecha de Nacimiento</p>
                    <p className="list text phone">Telefono</p>
                    <button className="add-client">+</button>
                </div>
                <div className="divider-line"></div>
            </div>

        </>
    )
}
export default HomePage