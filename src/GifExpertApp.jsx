import { useState } from "react";
//Archivo de barril
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
    //setCategories((cat) => [...cat, "tres"]);
  };

  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>
      {/*input*/}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/*listado de gif*/}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/*gifitem*/}
    </>
  );
};
