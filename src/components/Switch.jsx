import React, { useState, useContext } from "react";
import "./../styles/Switch.css";
import { NavLink } from "react-router-dom";
import { useSwitchToggleTrue, useSwitchToggleFalse } from "./SwitchProvider";


function Switch() {
  const switchTrue = useSwitchToggleTrue();
  const switchFalse = useSwitchToggleFalse();

  return (
    <div className="switch-container">
      <p><NavLink to={"/clientes"} onClick={switchTrue}  style={({ isActive }) => {
        return {color : isActive ? "black" : null}
      }}>Clientes</NavLink></p>
      <p>|</p>
      <p><NavLink to={"/proveedores"} onClick={switchFalse}  style={({ isActive }) => {
        return {color : isActive ? "black" : null}
      }}>Proveedores</NavLink></p>
    </div>
  )
}

export default Switch;
