import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://assignment-server-neon.vercel.app/categories").then(
        (res) => res.json()
      ),
  });

  return (
    <section className="my-16">
      <div>
        <h4 className="text-xl text-orange-400 font-bold">Categories</h4>
      </div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6">
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
