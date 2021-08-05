import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <CartProvider>
      {showModal && <Cart onShowCart={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
