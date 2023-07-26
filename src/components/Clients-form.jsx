import React from "react";
import { useState } from "react";
import { useHandleReloadContext } from "./SwitchProvider";

//Este componente es exclusivamente destinado al boton "Agregar nuevo usuario", donde se abre un modal con inputs vacios.

function ClientsForm() {
  //Creamos una variable de estado inicializada con las claves necesarias, sus valores son strings vacios
  const [customer, setCustomer] = useState({
    lastName: "",
    name: "",
    dni: "",
    address: "",
    birthdate: "",
    phone: "",
  });

  //Funcion de re-renderizado (setter)
  const handleReload = useHandleReloadContext();

  //Metodo para el modal de Agregar nuevo cliente / proveedor, los valores del input ingresados por el usuario modifican los datos de currentUser(en principio vacio)
  const handleChanges = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //Metodo Crud para agregar nuevos datos a la API
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    })
      .then((response) => {
        if (!response.ok) console.error("Required error " + response.status);
        handleReload();
        return response.json();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
    {/* Este formulario, via submit, acciona la funcion handleSubmit y es la encargada de cargar nuevos datos a la API  */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="lastName">Apellido </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          onChange={handleChanges}
        />
        <label htmlFor="name">Nombre </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChanges}
        />
        <label htmlFor="dni">Dni </label>
        <input
          type="text"
          name="dni"
          id="dni"
          required
          onChange={handleChanges}
        />
        <label htmlFor="address">Direccion </label>
        <input
          type="text"
          name="address"
          id="address"
          required
          onChange={handleChanges}
        />
        <label htmlFor="birthdate">Fecha de nacimiento </label>
        <input
          type="text"
          name="birthdate"
          id="birthdate"
          required
          onChange={handleChanges}
        />
        <label htmlFor="phone">Telefono </label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          onChange={handleChanges}
        />
        <div className="modal-button__container">
          <input type="submit" value="Agregar" />
        </div>
      </form>
    </>
  );
}

export default ClientsForm;
