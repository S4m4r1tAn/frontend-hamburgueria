import "../../App.css";

export const Product = ({ product, handleClick }) => {
  return (
    <>
      <ul className="eachProduct">
        <li>{product.name}</li>
        <li>Categoria: {product.category}</li>
        <li>Preço: {product.price}</li>
        <button onClick={() => handleClick(product.id)}>
          Adicionar ao carrinho
        </button>
      </ul>
    </>
  );
};
