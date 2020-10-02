import React, { useContext, useState } from "react";
import { ModeContext } from "../context/ModeContext";

const AddPopularProducts = (props) => {
  const { shopping, addToShoppingList } = props;
  const { mode } = useContext(ModeContext);
  let populars = ["sel", "sucre", "pain", "lait", "beurre", "huile"];
  const buttonClass = mode === "dark" ? "btn-outline-light" : "btn-dark";

  const [items, setItems] = useState(false);

  const setPersonalProducts = () => {
    setItems(items === false ? true : false);
  };

  const handleItemsSubmit = (event) => {
    event.preventDefault();
    populars[1] = event.target.elements.item.value;
    console.log(populars[1]);
    event.target.reset();
  };

  return (
    <div className="col-sm-2">
      <hr></hr>
      <p>Ajout rapide</p>
      <div>
        {populars.map((el) => (
          <button
            type="button"
            key={el}
            className={`btn btn-sm ${buttonClass} mr-1 my-1`}
            onClick={() => addToShoppingList(el)}
            disabled={shopping.includes(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={`btn btn-sm btn-outline-success`}
        onClick={() => setPersonalProducts()}
      >
        <i>set items</i>
      </button>
      {items ? (
        <form onSubmit={handleItemsSubmit} className="col-sm-9">
          <div className="input-group mb-3">
            <button
              className={`btn btn-sm ${buttonClass}`}
              htmlFor="item"
              type="submit"
              id="button-addon1"
            >
              Produit 1
            </button>
            <input className="form-control" type="text" id="item" />
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddPopularProducts;
