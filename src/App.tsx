import React from "react";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import { CartProvider } from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Home />
      {/* <Dashboard /> */}
    </CartProvider>
  );
};

export default App;
