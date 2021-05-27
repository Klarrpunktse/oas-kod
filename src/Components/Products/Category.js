import React, { useState } from "react";
import Card from "./Card";
import CategoryCard from "./CategoryCard";

//array med produkterna

function Category() {
  const [categories, setCategories] = useState([
    { category: 1, p1: "ONE", p2: "TWO", p3: "THREE", p4: "FIVE", price: 99 },
    {
      category: 2,
      p1: "dsakl",
      p2: "fddf",
      p3: "ggdgd",
      p4: "fdsfds",
      price: 109,
    },
    {
      category: 3,
      p1: "hhh",
      p2: "dsaöö",
      p3: "13354",
      p4: "5555",
      price: 119,
    },
  ]);

  /*
  1. Bryt ut arrayen med object lägg dom i en egen fil
  Lägg till alla properties till varje object (category)
  
  2. Lägg till en Link runt varje Card
  Se till att göra en Route för varje produktlänk
  */

  return (
    <>
      {categories.map((c) => (
        <div className="products-category">
          <div className="category-type">
            <h2>{c.category}</h2>
          </div>
          <div className="category-cards">
            <div>
              <Card product={c.p1} />
              <Card product={c.p2} />
            </div>
            <div>
              <Card product={c.p3} />
              <Card product={c.p4} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// function Category(props) {
//   return (
//     <div className="products-category">
//       <div className="category-type">
//         <h2>{props.type}</h2>
//       </div>
//       <div className="category-cards">
//         <div>
//           <Card product="Whey concentrate" />
//           <Card product="Whey isolate" />
//         </div>
//         <div>
//           <Card product="Casein hydrolysate" />
//           <Card product="Whey hydrolysate" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Category;

/*
<div className="products-category">
        <div className="category-type">
          <h2>WHEY AND CASEIN</h2>
        </div>
        <div className="category-cards">
          <div>
            <Card product="Whey concentrate" />
            <Card product={product} />
          </div>
          <div>
            <Card product="Casein hydrolysate" />
            <Card product="Whey hydrolysate" />
          </div>
        </div>
      </div>
      <div className="products-category">
        <div className="category-type">
          <h2>VEGAN</h2>
        </div>
        <div className="category-cards">
          <div>
            <Card product="Pea isolate" />
            <Card product="Soy isolate" />
          </div>
          <div>
            <Card product="Rice isolate" />
            <Card product="Hemp protein" />
          </div>
        </div>
      </div>
*/
