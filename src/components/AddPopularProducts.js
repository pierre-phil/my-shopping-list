import React, { useContext, useState } from "react";
import { ModeContext } from "../context/ModeContext";

const AddPopularProducts = (props) => {
  const { shopping, addToShoppingList } = props;
  const { mode } = useContext(ModeContext);
  let initialPopulars = ["sel", "sucre", "pain", "lait", "beurre", "huile"];
  let [populars, setPopulars] = useState(initialPopulars);
  const buttonClass = mode === "dark" ? "btn-outline-light" : "btn-dark";

  const [items, setItems] = useState(false);

  const setPersonalProducts = () => {
    setItems(items === false ? true : false);
    setPopulars([]);
  };

  const handleItemsSubmit = (event) => {
    event.preventDefault();
    const customProduct = event.target.elements.bite.value;
    console.log(customProduct);
    setPopulars([...populars, customProduct]);
    console.log(populars);
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
        className="btn btn-sm btn-link text-left"
        disabled={items}
        onClick={() => setPersonalProducts()}
      >
        <i>{items ? `Click "save" when done ->` : `Change frequent items`}</i>
      </button>

      {!items ? (
        ""
      ) : (
        <button
          type="button"
          className="btn btn-sm btn-link text-left"
          onClick={() => window.location.reload()}
        >
          <i>Save</i>
        </button>
      )}

      {items ? (
        <form onSubmit={handleItemsSubmit} className="col-sm-9">
          <div className="input-group mb-3">
            <button
              className={`btn btn-sm btn-outline-warning my-2 ${buttonClass}`}
              htmlFor="bite"
              type="submit"
              id="button-addon1"
            >
              Add
            </button>
            <input className="form-control" type="text" id="bite" required />
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddPopularProducts;
