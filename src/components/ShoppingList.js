import React from "react";

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList, eraseShoppingList } = props;

  return (
    <div className="col-sm-9">
      <hr></hr>
      <ul>
        {shopping.map((el) => {
          return (
            <li className="mb-2" key={el}>
              <div className="d-flex align-items-center justify-content-between">
                {el}
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => removeFromShoppingList(el)}
                >
                  &#x2713;
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {shopping.length >= 1 ? (
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => eraseShoppingList()}
          >
            <i>Effacer la liste</i>
          </button>
        </div>
      ) : (
        <p className="small text-info">
          <i>Youpi ! Rien à acheter pour l'instant.</i>
        </p>
      )}
    </div>
  );
};

export default ShoppingList;
