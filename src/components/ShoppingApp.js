import React, { useState, useEffect } from "react";
import AddPopularProducts from "./AddPopularProducts";
import ShoppingList from "./ShoppingList";
import AddProductForm from "./AddProductForm";

const ShoppingApp = () => {
  const [shopping, setShopping] = useState(
    () => JSON.parse(localStorage.getItem("myShoppingList")) || []
  );

  const addToShoppingList = (product) => {
    setShopping([...shopping, product]);
  };

  const removeFromShoppingList = (product) => {
    setShopping(shopping.filter((el) => el !== product));
  };

  const eraseShoppingList = () => {
    setShopping([]);
  };

  useEffect(() => {
    // change le titre de la page selon nb éléments dans liste
    document.title = shopping.length
      ? `${shopping.length} item(s) on your shopping list`
      : `my Shopping List`;
  }, [shopping.length]);

  useEffect(() => {
    // enreigstre liste dans localstorage
    localStorage.setItem("myShoppingList", JSON.stringify(shopping));
  }, [shopping]);

  return (
    <section>
      <div className="row">
        <ShoppingList
          shopping={shopping}
          removeFromShoppingList={removeFromShoppingList}
          eraseShoppingList={eraseShoppingList}
        />
        <AddPopularProducts
          shopping={shopping}
          addToShoppingList={addToShoppingList}
          removeFromShoppingList={removeFromShoppingList}
        />
        <AddProductForm
          shopping={shopping}
          addToShoppingList={addToShoppingList}
        />
      </div>
    </section>
  );
};

export default ShoppingApp;
