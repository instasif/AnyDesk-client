import React from "react";
import { useLoaderData } from "react-router-dom";
import Item from "./Item";

const Items = () => {
  // grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2
  const items = useLoaderData();
  console.log(items);
  return (
    <div className=" w-auto h-auto">
      {
        items.map(i => <Item key={i.name} i={i}/>)
      }
    </div>
  );
};

export default Items;
