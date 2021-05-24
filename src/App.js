import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(128000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            product={product}
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          basket={basket}
          resetBasket={resetBasket}
          products={products}
          total={total}
        />
      )}
    </>
  );
}

export default App;
