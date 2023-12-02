import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import ItemsContainer from "./components/ItemsContainer";
import Navbar from "./components/Navbar";

import { calculateTotal } from "./features/cart/ItemsSlice";

function App() {
  const { cartItems } = useSelector((state) => state.items.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, cartItems]);
  return (
    <main>
      <Navbar />
      <ItemsContainer />
      <Footer />
    </main>
  );
}

export default App;
