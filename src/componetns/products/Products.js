import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import Navigation from "../navigation/Navigation";

import Product from "./Product";

const Products = () => {
  const [productState, setProductState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [backToListButton, setBackToListButton] = useState(false);

  const [modalState, setModalState] = useState(false);
  const [enteredId, setEnteredId] = useState("");

  const [pageNumber, setPageNumber] = useState(1);

  const fetchProducts = () => {
    setIsLoading(true);
    setError(false);
    setBackToListButton(false);
    if (enteredId) {
      fetch(`https://reqres.in/api/products/${enteredId}`)
        .then((request) => {
          if (!request.ok) {
            setError(request.statusText);
            setBackToListButton(true);
            throw new Error(request.statusText);
          }
          setBackToListButton(true);
          return request.json();
        })
        .then((products) => {
          let list = [];
          list.push(products.data);
          setProductState(list);
          setIsLoading(false);
          console.log(list);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error.message
          );
        });
    } else {
      fetch(`https://reqres.in/api/products?per_page=5&page=${pageNumber}`)
        .then((request) => {
          if (!request.ok) {
            setError(request.statusText);
            setBackToListButton(true);
            throw new Error(request.statusText);
          }
          return request.json();
        })
        .then((products) => {
          setProductState(products.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error.message
          );
        });
    }
  };

  const nextPage = () => {
    if (pageNumber < 3) {
      setPageNumber(pageNumber + 1);
    }
  };

  const backPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNumber, enteredId]);

  const showModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredId(event.target.value);
  };

  const backToList = () =>{
    setEnteredId("");
  }

  return (
    <div className="content">
      {modalState && <Modal onClick={closeModal} />}

      <section className="imput-section">
        <input
          onChange={submitHandler}
          value={enteredId}
          type={"number"}
          placeholder="Type id"
        />
      </section>

      <section>
        <ul className="product-list">
          {!isLoading && productState
            ? productState.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  id={product.id}
                  year={product.year}
                  pantone={product.pantone_value}
                  color={product.color}
                  onClick={showModal}
                />
              ))
            : null}
          {isLoading && !isError && (
            <p className="loading-message">Loading ...</p>
          )}
          {isError && <p className="error-message">{isError}</p>}
        </ul>
      </section>

      {backToListButton ? (
        <div className="nav">
          <button className="button" onClick={backToList}>Back to list</button>
        </div>
      ) : (
        <Navigation next={nextPage} back={backPage} />
      )}
    </div>
  );
};

export default Products;
