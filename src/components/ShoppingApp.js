import React, { useState, useEffect } from "react";
import AddPopularProducts from "./AddPopularProducts";
import ShoppingList from "./ShoppingList";
import AddProductForm from "./AddProductForm";

const ShoppingApp = () => {
  const [shopping, setShopping] = useState(
    () => JSON.parse(localStorage.getItem("myShoppingList")) || []
  );
  // ici on ajoute || [] au cas où le localStorage est vierge, qu'il puisse utiliser un array vide plutôt que undefined et ne pas retourner d'erreur
  // ici nous mettons une fonction () => voir lazy initial state
  // en effet il faut éviter que localStorage soit cherché à chaque render, cela bouffe de la ressource
  // le fait de créer une fonction permet apparemment d'éviter ça

  // on aurait pu aussi créer une variable :
  // const getLocalStorage = () => JSON.parse(localStorage.getItem("myShoppingList")) || []
  // const [shopping, setShopping] = useState(getLocalStorage)

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
    console.log("changement");
    document.title = shopping.length
      ? `${shopping.length} produit(s) sur votre liste des courses`
      : `Préparez vos courses`;
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
