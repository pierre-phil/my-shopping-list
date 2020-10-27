import React, { useState } from "react";

import "../App.css";

const Cookie = () => {
  const [accept, setAccept] = useState(
    () => JSON.parse(localStorage.getItem("cookiesAccept")) || []
  );

  const handleCookieAccept = () => {
    localStorage.setItem("cookiesAccept", JSON.stringify(true));
    setAccept(true);
  };

  return (
    <>
      {accept === true ? (
        ""
      ) : (
        <div className="cookies my-5">
          <p className="mb-1">
            By using this site, you accept the browser's localStorage to store
            your shopping list. Your data is not stored on a server. You can
            decline or approve browser's localisation which we use to provide
            weather forecast. Localisation is approximative.
          </p>
          <br></br>
          <button className="button" onClick={handleCookieAccept}>OK</button>
        </div>
      )}
    </>
  );
};

export default Cookie;
