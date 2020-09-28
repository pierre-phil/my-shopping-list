import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const AddPopularProducts = (props) => {
  const { shopping, addToShoppingList } = props;
  const { mode } = useContext(ModeContext);
  const populars = ["sel", "sucre", "pain", "lait", "beurre", "huile"];

  const buttonClass = mode === "dark" ? "btn-outline-light" : "btn-dark";

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
    </div>
  );
};

export default AddPopularProducts;
