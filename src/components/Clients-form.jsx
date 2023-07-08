import React from "react";
import { useState } from "react";
import { useHandleReloadContext } from "./SwitchProvider";

function ClientsForm() {
  const [customer, setCustomer] = useState({
    lastName: "",
    name: "",
    dni: "",
    address: "",
    birthdate: "",
    phone: "",
  });

  const handleReload = useHandleReloadContext();

  const handleChanges = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
