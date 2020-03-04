import React from "react";
import { useHistory } from "react-router-dom";

const SellerDash = () => {
  const history = useHistory();

  const signOut = () => {
    window.localStorage.removeItem("token");
  };
  // .get with items that are currently up for auction
  // form to list items for auction(edit and delete here)
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
      <p>sellerDash.js</p>
      <button onClick={() => history.push("/shop/")}>Go To Auctions</button>
    </div>
  );
};

export default SellerDash;
