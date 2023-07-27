import { useState } from "react";

import Slogan from "./Slogan";
import VerticalDivider from "./VerticalDivider";

import "../styles/Login.css";

function Login() {
  document.body.style = "background-color: var(--gula-red)";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let errorMessageUser = validationUser(email);
  let errorMessagePassword = validationPassword(password);

  return (
    <>
      <div className="components-container">
        <Slogan />
        <VerticalDivider />
        <div className="right-container">
          <p className="login-page-text">Ingresar</p>
          <form className="right-container__form"
            onSubmit={(ev) => {
                ev.preventDefault();
                login(email, password);
            }}
            >
            <input
              id="input-user"
              name="email"
              type="email"
              placeholder="usuario@gula.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              />
            <p className="error-message">{errorMessageUser}</p>
            <p className="login-text login-text__data">Usuario</p>

            <input
              id="input-user2"
              name="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              />

            <p className="error-message">{errorMessagePassword}</p>
            <p className="login-text login-text__data">Contraseña</p>
            <button id="boton-enviar" type="submit">
              Ingrese
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const login = (email, password) => {
  if (
    (email === "aguilar@gula.com" && password === "milagros123") ||
    (email === "calo@gula.com" && password === "adrian123") ||
    (email === "cardenas@gula.com" && password === "tomas123") ||
    (email === "correa@gula.com" && password === "alejandro123") ||
    (email === "fauret@gula.com" && password === "gaston123") ||
    (email === "ramos@gula.com" && password === "marcelo123")
  )
    return alert("Login Correcto"), (window.location.href = "/inicio");
  else alert("Usuario y/o Contraseña Incorrecta");
};

const validationUser = (email) => {
  if (email.length > 0 && email.length < 9 && !email.includes("@"))
    return "Email Incorrecto";
  else "";
};

const validationPassword = (password) => {
  if (password.length > 0 && password.length < 5)
    return "Contraseña Incorrecta";
  else "";
};

export default Login;
