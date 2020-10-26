import React, { useContext, useState, useEffect } from "react";
import { ModeContext } from "../context/ModeContext";

const AddPopularProducts = (props) => {
  const { shopping, addToShoppingList } = props;

  const { mode } = useContext(ModeContext);
  const buttonClass = mode === "dark" ? "btn-outline-light" : "btn-dark";

  let initialPopulars = ["sel", "sucre", "pain", "lait", "beurre", "huile"];
  let [populars, setPopulars] = useState(
    () => JSON.parse(localStorage.getItem("myCustomItems")) || initialPopulars
  );

  const [items, setItems] = useState(false);

  const setCustomPopulars = () => {
    setItems(items === false ? true : false);
    setPopulars([]);
  };

  const handleItemsSubmit = (event) => {
    event.preventDefault();
    const customProduct = event.target.elements.customItems.value;
    setPopulars([...populars, customProduct]);
    event.target.reset();
  };

  useEffect(() => {
    // enreigstre popular products dans localstorage
    localStorage.setItem("myCustomItems", JSON.stringify(populars));
  }, [populars]);

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
          className="btn btn-sm btn-outline-danger text-left my-2"
          onClick={() => window.location.reload()}
        >
          <i>Save</i>
        </button>
      )}

      <button
        type="button"
        className="btn btn-sm btn-link text-info my-2"
        disabled={items}
        onClick={() => setCustomPopulars()}
      >
        <i>{items ? `Click "save" when done` : `Set frequent items`}</i>
      </button>

      {items ? (
        <form onSubmit={handleItemsSubmit} className="col-sm-9">
          <div className="input-group input-group-sm mb-3">
            <button
              className={`btn btn-sm btn-outline-info my-2`}
              htmlFor="customItems"
              type="submit"
              id="button-addon1"
            >
              Add
            </button>
            <input
              style={{
                height: "9px",
                border: "2px solid #5bc0de",
              }}
              className="form-control input mt-2"
              type="text"
              id="customItems"
              placeholder="Insert frequent item"
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
