import React from "react";
import { useLoaderData } from "react-router-dom";
import Item from "./Item";

const Items = () => {
  const items = useLoaderData();
  return (
    <div>
      {
        items.map(i => <Item key={i.name} i={i}/>)
      }
    </div>
  );
};

export default Items;
