import React from "react";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import ClientsForm from "./Clients-form";
import { useSwitchContext } from "./SwitchProvider";
import ProvForm from "./Prov-form";
import "../styles/modd.css";

function Modd() {
  const switchState = useSwitchContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="add-button__container">
        <AiFillPlusCircle className="add-button" onClick={handleOpen} />
        <Dialog open={open} onClose={handleClose} className="modal">
          {switchState && <ClientsForm />}
          {!switchState && <ProvForm />}
        </Dialog>
      </div>
    </>
  );
}

export default Modd;
