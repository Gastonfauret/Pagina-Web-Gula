import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Dialog } from "@mui/material";
import requestError from "../assets/error.png";
import Modd from "./Modd";
import { useReloadContext, useHandleReloadContext } from "./SwitchProvider";
import "../styles/data-clients.css";

function DataClients() {
  //Estado de usuarios
  const [users, setUsers] = useState([]);

  //Estado de error
  const [err, setErr] = useState(false);

  //Metodos para abrir o cerrar el modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Estado de la variable "Reload" y funcion handleReload (Para cambiar el valor de Reload), datos importados del componente SwitchProvider
  const reload = useReloadContext();
  const handleReload = useHandleReloadContext();

  //Objeto plantilla vacio para inicializar el estado de currentUser
  const templateUser = {
    lastName: "",
    name: "",
    dni: "",
    address: "",
    birthdate: "",
    phone: "",
  };

  //Para manipular los datos del formulario con los metodos CRUD.
  const [currentUser, setCurrentUser] = useState(templateUser);

  //Renderizamos la funcion del metodo GET, quien va a re-renderizar cada vez que ocurra un cambio en la variable de estado "reload"
  useEffect(() => {
    getUsers();
  }, [reload]);

  //Metodo para dar el valor mismo del usuario seleccionado, a la variable currentUser
  const selectUser = (user) => {
    setCurrentUser(user);
    handleOpen();
  };

  //Metodo para el modal de Agregar nuevo cliente / proveedor, los valores del input ingresados por el usuario modifican los datos de currentUser(en principio vacio)
  const handleChange = (e) => {
    setCurrentUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //Metodo "Crud" PUT, ingresa currentUser con un metodo JSON.stringify para modificar el usuario existente
  //A su vez ejecuta la funcion handleReload para que se actualice el componente
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://649115f02f2c7ee6c2c7b868.mockapi.io/clients/${currentUser.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser),
      }
    )
      .then((response) => {
        if (!response.ok) console.error("Request error" + response.state);
        handleReload();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  //Borrar usuario con el metodo Crud DELETE
  const deleteUser = (user) => {
    fetch(`https://649115f02f2c7ee6c2c7b868.mockapi.io/clients/${user}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) console.error("Request error" + response.status);
        handleReload();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  //Metodo Crud GET
  const getUsers = () => {
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/clients")
      .then((response) => {
        if (!response.ok) throw new Error("Request error");
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch(() => setErr(true));
  };

  //Si error es true, renderiza imagen de error
  if (err)
    return (
      <>
        <div className="request-error-container">
          <img src={requestError} className="fix-img-error" />
        </div>
      </>
    );

  return (
    <>
      {/* Tabla donde se van a renderizar los datos obtenidos con el metodo GET */}
      <div className="add-button-container">
        <table className="data-clients-container">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Dni</th>
              <th>Direccion</th>
              <th>Fecha de nac.</th>
              <th>Telefono</th>
            </tr>
            <Modd />
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.lastName}</td>
                <td>{user.name}</td>
                <td>{user.dni}</td>
                <td>{user.address}</td>
                <td>{new Date(user.birthdate).toLocaleDateString("en-US")}</td>
                <td>{user.phone}</td>
                <td>
                  {/* Boton para editar un usuario. */}
                  <AiOutlineEdit
                    className="user-icons"
                    onClick={() => selectUser(user)}
                  />
                </td>
                <td>
                  {/* Boton para borrar un usuario */}
                  <AiOutlineDelete
                    className="user-icons"
                    onClick={() => deleteUser(user.id)}
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
            <label htmlFor="lastName">Apellido </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={currentUser.lastName}
              onChange={handleChange}
            />
            <label htmlFor="name">Nombre </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={currentUser.name}
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
            <label htmlFor="address">Direccion </label>
            <input
              type="text"
              name="address"
              id="address"
              required
              value={currentUser.address}
              onChange={handleChange}
            />
            <label htmlFor="birthdate">Fecha de nacimiento </label>
            <input
              type="text"
              name="birthdate"
              id="birthdate"
              required
              value={currentUser.birthdate}
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
            <div className="modal-button__container">
              <input type="submit" value="Editar" />
            </div>
          </form>
        </Dialog>

        {/* Boton para agregar usuarios (abre modal) */}
      </div>
    </>
  );
}
export default DataClients;
