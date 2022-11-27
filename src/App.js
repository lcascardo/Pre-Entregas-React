import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";


export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#663399',
      }
    },
  });

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </CartProvider>

    </>
  );
}


