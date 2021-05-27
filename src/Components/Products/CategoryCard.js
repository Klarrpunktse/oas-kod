import Card from "./Card";
// TODO NOT USED!
const CategoryCard = ({ product }) => {
  return (
    <>
      <div className="products-category">
        <div className="category-type">
          <h2>WHEY AND CASEIN</h2>
        </div>

        <div className="category-cards">
          <div>
            <Card product={product} />
            <Card product={product} />
          </div>
          <div>
            <Card product={product} />
            <Card product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
