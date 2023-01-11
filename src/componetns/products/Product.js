import React, { useContext } from "react";
import ModalContext from "../../store/modal-context";

import "./product.css";

const Product = (props) => {
  const ctx = useContext(ModalContext);

  const manageModal = () => {
    ctx.color = props.color;
    ctx.id = props.id;
    ctx.name = props.name;
    ctx.pantone = props.pantone;
    ctx.year = props.year;
    props.onClick();
  };

  return (
    <li
      onClick={manageModal}
      style={{ backgroundColor: `${props.color}` }}
      className="product-item"
    >
      <h1>{props.id}</h1>
      <h3>{props.name}</h3>
      <h3>{props.pantone}</h3>
      <h3>{props.color}</h3>
      <h3>{props.year}</h3>
    </li>
  );
};

export default Product;
