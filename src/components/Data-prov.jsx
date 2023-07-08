import React from "react";
import { Dialog } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import requestError from "../assets/error.png";
import Modd from "./Modd";
import { useReloadContext, useHandleReloadContext } from "./SwitchProvider";
import "../styles/data-prov.css";

function DataProv() {
  const [providers, setProviders] = useState([]);
  const [err, setErr] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const reload = useReloadContext();
  const handleReload = useHandleReloadContext();

  const templateUser = {
    lastName: "",
    name: "",
    dni: "",
    address: "",
    birthdate: "",
    phone: "",
  };

  const [currentUser, setCurrentUser] = useState(templateUser);

  const deleteUser = (user) => {
    fetch(`https://649115f02f2c7ee6c2c7b868.mockapi.io/providers/${user}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) console.error("Request error" + response.status);
        handleReload();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  const selectUser = (user) => {
    setCurrentUser(user);
    handleOpen();
  };

  const handleChange = (e) => {
    setCurrentUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://649115f02f2c7ee6c2c7b868.mockapi.io/providers/${currentUser.id}`, {
      method: "PUT",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(currentUser)
    })
    .then(response => {
      if(!response.ok) console.error("Request error" + response.state)
      handleReload();
      return response.json();
    })
    .catch((error) => console.error(error));
  };

  function getProviders() {
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/providers")
      .then((response) => {
        if (!response.ok) throw new Error("Request error");
        return response.json();
      })
      .then((data) => setProviders(data))
      .catch(() => setErr(true));
  }

  useEffect(() => {
    getProviders();
  }, [reload]);

  if (err)
    return (
      <div className="data-clients-container">
        <img src={requestError} />
      </div>
    );

  return (
    <>
      <div className="add-button-container">
        <table className="data-prov-container">
          <thead>
            <tr>
              <th>Comercio</th>
              <th>Propietario</th>
              <th>Dni</th>
              <th>Cbu</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Rubro</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider) => (
              <tr key={provider.id}>
                <td>{provider.company}</td>
                <td>{provider.owner}</td>
                <td>{provider.dni}</td>
                <td>{provider.cbu}</td>
                <td>{provider.address}</td>
                <td>{provider.phone}</td>
                <td>{provider.rubro}</td>
                <td>
                  <AiOutlineEdit
                    className="user-icons"
                    onClick={() => {
                      selectUser(provider);
                    }}
                  />
                </td>
                <td>
                  <AiOutlineDelete
                    className="user-icons"
                    onClick={() => {
                      deleteUser(provider.id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal para editar cada usuario */}
        <Dialog
          open={open}
          onSubmit={handleSubmit}
          onClose={handleClose}
          className="modal"
        >
          <form action="">
            <label htmlFor="company">Comercio </label>
            <input
              type="text"
              name="company"
              id="company"
              required
              value={currentUser.company}
              onChange={handleChange}
            />
            <label htmlFor="owner">Propietario </label>
            <input
              type="text"
              name="owner"
              id="owner"
              required
              value={currentUser.owner}
              onChange={handleChange}
            />
            <label htmlFor="dni">Dni </label>
            <input
              type="text"
              name="dni"
              id="dni"
              required
              value={currentUser.dni}
              onChange={handleChange}
            />
            <label htmlFor="cbu">CBU </label>
            <input
              type="text"
              name="cbu"
              id="cbu"
              required
              value={currentUser.cbu}
              onChange={handleChange}
            />
            <label htmlFor="address">Direccion</label>
            <input
              type="text"
              name="address"
              id="address"
              required
              value={currentUser.address}
              onChange={handleChange}
            />
            <label htmlFor="phone">Telefono </label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              value={currentUser.phone}
              onChange={handleChange}
            />
            <label htmlFor="rubro">Rubro </label>
            <input
              type="text"
              name="rubro"
              id="rubro"
              required
              value={currentUser.rubro}
              onChange={handleChange}
            />
            <div className="modal-button__container">
              <input type="submit" value="Editar" />
            </div>
          </form>
        </Dialog>
        <Modd />
      </div>
    </>
  );
}

export default DataProv;
