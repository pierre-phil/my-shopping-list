import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const AddProductForm = (props) => {
  const { mode } = useContext(ModeContext);
  const buttonClass = mode === "dark" ? "btn-outline-light" : "btn-dark";
  const { shopping, addToShoppingList } = props;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const product = event.target.elements.product.value;
    if (!shopping.includes(product)) {
      addToShoppingList(event.target.elements.product.value);
    } else {
      alert(`${product} est déjà sur la liste`);
    }

    event.target.reset();
  };
  return (
    <form onSubmit={handleFormSubmit} className="col-sm-9">
      <hr></hr>
      <div className="input-group mb-3">
        <button
          className={`btn  ${buttonClass}`}
          htmlFor="product"
          type="submit"
          id="button-addon1"
        >
          Ajouter
        </button>
        <input className="form-control" type="text" id="product" required />
      </div>
    </form>
  );
};

export default AddProductForm;
