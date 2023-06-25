import React from "react";
import Header from "./Header";
import '../styles/Home-Page.css'


function Listados() {
    return (
        <>
            <Header/>
            <div className="HP-components-container">
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
export default Listados