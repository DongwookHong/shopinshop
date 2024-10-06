import React from "react";
import HeaderSet from "./ListHeader.js";
import Searchbar from "./Searchbar.js";
import Categori from "./Categori.js"
import ListCard from "./ListCard.js"
import LastBar from "./LastBar.js"

export const Shoplist = () => {
  return (
    <div>
      <HeaderSet />
      <Searchbar />
      <Categori />
      <ListCard />
      
      <LastBar />
    </div>
  );
};

export default Shoplist;
