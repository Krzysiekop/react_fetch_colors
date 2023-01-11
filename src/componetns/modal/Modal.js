import React, { useContext } from "react";
import ModalContext from "../../store/modal-context";
import "./Modal.css";


const ModalOverlay = (props) => {
  return <div className="overlay" onClick={props.onClick}></div>
}


const Modal = (props) => {
  const ctx = useContext(ModalContext);

  return (
    <>
    <ModalOverlay onClick={props.onClick} />
    <div className="modal" style={{ backgroundColor: `${ctx.color}` }}>
      <ul>
        <li className="modal-item">
          <h1>{ctx.id}</h1>
          <h3>{ctx.name}</h3>
          <h3>{ctx.pantone}</h3>
          <h3>{ctx.color}</h3>
          <h3>{ctx.year}</h3>
        </li>
      </ul>
      <button className="modalButton" onClick={props.onClick}>X</button>
    </div>
    </>
  );
};

export default Modal;
