import React from "react";
import Switch from "./Switch";
import DataClients from "./Data-clients";
import SignOff from "./Sign-off";
import Header from "./Header";
import Footer from "./Footer";

function Clientes() {
  return (
    <>
      <Header />
      <Switch />
      <DataClients />
      <SignOff />
      <Footer />
    </>
  );
}

export default Clientes;
