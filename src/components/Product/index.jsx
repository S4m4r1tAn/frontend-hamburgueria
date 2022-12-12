import "../../App.css";

export const Product = ({ product, handleClick }) => {
  return (
    <>
      <ul className="eachProduct">
        <li>{product.name}</li>
        <li>{product.category}</li>
        <li>{product.price}</li>
        <button onClick={() => handleClick(product.id)}>
          Adicionar ao carrinho
        </button>
      </ul>
    </>
  );
};
