import React from "react";
import { useState, useContext } from "react";

// Primero creamos el nuevo contexto
const switchContext = React.createContext(); //Para la variable switchState
const switchToggleTrue = React.createContext(); //Para la funcion switchTrue
const switchToggleFalse = React.createContext(); //Para la funcion switchFalse
const reloadContext = React.createContext(); //Para recargar componentes
const handleReloadContext = React.createContext(); //Para la funcion handleReload

//Exportamos los contextos para usarlos en otros componentes
export const useReloadContext = () => {
  return useContext(reloadContext);
};

export const useHandleReloadContext = () => {
  return useContext(handleReloadContext);
};

export const useSwitchContext = () => {
  return useContext(switchContext);
};

export const useSwitchToggleTrue = () => {
  return useContext(switchToggleTrue);
};

export const useSwitchToggleFalse = () => {
  return useContext(switchToggleFalse);
};

function SwitchProvider({ children }) {
  const [switchState, setSwitchState] = useState(true);
  const [reload, setReload] = useState(0);

  const switchTrue = () => {
    setSwitchState(true);
  };
  const switchFalse = () => {
    setSwitchState(false);
  };
  const handleReload = () => {
    setReload(reload + 1);
  };

  return (
    <reloadContext.Provider value={reload}>
        <handleReloadContext.Provider value={handleReload}>
          <switchContext.Provider value={switchState}>
            <switchToggleTrue.Provider value={switchTrue}>
              <switchToggleFalse.Provider value={switchFalse}>
                {children}
              </switchToggleFalse.Provider>
            </switchToggleTrue.Provider>
          </switchContext.Provider>
        </handleReloadContext.Provider>
    </reloadContext.Provider>
  );
}

export default SwitchProvider;
