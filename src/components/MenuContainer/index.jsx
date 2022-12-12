import { Product } from "../Product";
import "../../App.css";

export const MenuContainer = ({ products, filteredProducts, handleClick }) => {
  return (
    <div className="productsShowCase">
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};
