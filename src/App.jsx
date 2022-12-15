import { useEffect, useState } from "react";
import { MenuContainer } from "./components/MenuContainer";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    totalPrice();
  }, [currentSale]);

  const showProducts = () => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(userInput.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

  const handleClick = (productId) => {
    // procurando no array de produtos
    const searchId = products.find((product) => {
      return product.id === productId;
    });

    // procurando no carrinho de compras
    const currentSearch = currentSale.find((product) => {
      return product.id === productId;
    });

    if (!currentSearch) {
      setCurrentSale([...currentSale, searchId]);
    }
  };

  const totalPrice = () => {
    const total = currentSale.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    setCartTotal(total);
  };

  return (
    <>
      <div className="cover"></div>
      <div className="search">
        <input
          type="text"
          placeholder="buscar produto"
          value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
        <button onClick={() => showProducts(userInput)}>Procurar</button>
      </div>
      <div className={cartTotal.toFixed(2) > 0 ? "total" : "empty"}>
        Total: R$ {cartTotal.toFixed(2)}
      </div>
      <span className={cartTotal.toFixed(2) > 0 ? "seeCart" : "empty"}>
        Ver carrinho
      </span>
      <MenuContainer
        products={filteredProducts.length > 0 ? filteredProducts : products}
        handleClick={handleClick}
      />
      {/* <p>Totalzinho: R$ {cartTotal.toFixed(2)}</p> */}
      Itens no carrinho: <br />
      {currentSale.map((product, index) => {
        return (
          <p key={index}>
            Produto: {product.name} preço: {product.price}
          </p>
        );
      })}
    </>
  );
};

export default App;
