import React from "react";
import Header from "./Header";
import Switch from "./Switch";
import Footer from "./Footer";
import SignOff from "./Sign-off";
import DataProv from "./Data-prov";

function Providers() {
  return (
    <>
      <Header />
      <Switch />
      <DataProv />
      <SignOff />
      <Footer />
    </>
  );
}

export default Providers;
