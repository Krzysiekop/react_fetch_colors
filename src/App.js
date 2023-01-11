import React from "react";
import "./App.css";
import Products from "./componetns/products/Products";
import ModalContext from "./store/modal-context";

function App() {
  return (
    <div>
      <ModalContext.Provider
        value={{
          color: "",
          id: "",
          name: "",
          pantone: "",
          color: "",
          year: "",
        }}
      >
        <Products></Products>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
