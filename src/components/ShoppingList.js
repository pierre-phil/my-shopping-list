import React from "react";

import FlipMove from 'react-flip-move';

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList, eraseShoppingList } = props;

  return (
    <div className="col-md-9">
      <hr></hr>
      <ul>
          <FlipMove duration="150">
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
          </FlipMove>
      </ul>
      {shopping.length >= 1 ? (
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => eraseShoppingList()}
          >
            <i>Reset list</i>
          </button>
        </div>
      ) : (
        <p className="small text-info">
          <i>Alright ! Nothing to buy yet.</i>
        </p>
      )}
    </div>
  );
};

export default ShoppingList;
