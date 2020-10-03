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
    const customProduct = event.target.elements.customItems.value;
    console.log(customProduct);
    setPopulars([...populars, customProduct]);
    console.log(populars);
    event.target.reset();
  };

  return (
    <div className="col-sm-3">
      <hr></hr>
      <p>Frequent items</p>
      <div>
        {populars.map((el) => (
          <button
            type="button"
            key={el}
            className={`btn btn-sm ${buttonClass} mr-1 mb-1`}
            onClick={() => addToShoppingList(el)}
            disabled={shopping.includes(el)}
          >
            {el}
          </button>
        ))}
      </div>

      {!items ? (
        ""
      ) : (
        <button
          type="button"
          className="btn btn-sm btn-outline-success text-left my-2"
          onClick={() => window.location.reload()}
        >
          <i>Save</i>
        </button>
      )}

      <button
        type="button"
        className="btn btn-sm btn-link my-2"
        disabled={items}
        onClick={() => setPersonalProducts()}
      >
        <i>{items ? `Click "save" when done` : `Reset frequent items`}</i>
      </button>

      {items ? (
        <form onSubmit={handleItemsSubmit} className="col-sm-9">
          <div className="input-group input-group-sm mb-3">
            <button
              className={`btn btn-sm btn-outline-primary my-2`}
              htmlFor="customItems"
              type="submit"
              id="button-addon1"
            >
              Add
            </button>
            <input
              style={{
                height: "10px",
                backgroundColor: "rgb(50, 115, 220)",
                color: "white",
                border: "2px solid rgb(50, 115, 220)",
              }}
              className="form-control bite mt-2"
              type="text"
              id="customItems"
              required
            />
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddPopularProducts;
