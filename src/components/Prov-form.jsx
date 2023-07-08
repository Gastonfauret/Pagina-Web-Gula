import React from "react";
import { useState } from "react";
import { useHandleReloadContext } from "./SwitchProvider";

function ProvForm() {
  const [customer, setCustomer] = useState({
    company: "",
    owner: "",
    dni: "",
    cbu: "",
    address: "",
    phone: "",
    rubro: ""
  });

  const handleReload = useHandleReloadContext();

  const handleChanges = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/providers", {
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
      <label htmlFor="company">Comercio </label>
            <input
              type="text"
              name="company"
              id="company"
              required
              onChange={handleChanges}
            />
            <label htmlFor="owner">Propietario </label>
            <input
              type="text"
              name="owner"
              id="owner"
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
            <label htmlFor="cbu">CBU </label>
            <input
              type="text"
              name="cbu"
              id="cbu"
              required
              onChange={handleChanges}
            />
            <label htmlFor="address">Direccion</label>
            <input
              type="text"
              name="address"
              id="address"
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
            <label htmlFor="rubro">Rubro </label>
            <input
              type="text"
              name="rubro"
              id="rubro"
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

export default ProvForm;
