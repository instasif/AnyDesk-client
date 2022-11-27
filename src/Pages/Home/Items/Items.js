import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../Modal/Modal";
import Item from "./Item";

const Items = () => {
  const [treatement, setTreatement] = useState(null);
  const items = useLoaderData();
  return (
    <section>
      <div className=" w-auto h-auto">
      {
        items.map(i => <Item 
          key={i.name} 
          i={i}
          setTreatement={setTreatement}
          />)
      }
    </div>
    {treatement && <Modal treatement={treatement}/>}
    </section>
  );
};

export default Items;
