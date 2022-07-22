import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Announcement from "./components/Announcement";
import Home from "./pages/Home";
import { useFetch } from "./components/hooks/useFetch";
import Nav from "./components/Nav";
import { ProductProvider } from "./contexts/ProductContext";
import { GEO_URL, MESSAGES } from "./data/constants";
import { CartProvider } from "./contexts/CartContext";
import useAuth from "./components/hooks/useAuth";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import ProductsController from "./components/controllers/ProductsController";
import LoginController from "./components/controllers/LoginController";
import CartController from "./components/controllers/CartController";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import ProductDetails from "./components/ProductDetails";
import SearchController from "./components/controllers/SearchController";
import CollectionController from "./components/controllers/CollectionController";

function App() {
  const { data, fetchData, cancelFetch } = useFetch(GEO_URL);
  const [isAuth, login, logout] = useAuth(false);
  useEffect(() => {
    fetchData();
    return cancelFetch;
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Announcement
          message={
            data?.country_name
              ? MESSAGES.ANNOUNCEMENT + MESSAGES.COUNTRY + data.country_name
              : MESSAGES.ANNOUNCEMENT + MESSAGES.FREE_SHIP_PRICE_LIMIT
          }
        />
        <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <LoginController
                    login={login}
                    isAuth={isAuth}
                    logout={logout}
                  />
                }
              />
              <Route path="/shop" element={<CollectionController />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/brands" element={<Brands />} />
              <Route
                path="/collections/:collection"
                element={<ProductsController />}
              />
              <Route path="/:collection/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartController />} />
              <Route path="/search" element={<SearchController />} />
              <Route
                exact
                path="/checkout"
                element={<ProtectedRoute isAuth={isAuth} />}
              >
                <Route exact path="/checkout" element={<Checkout />} />
              </Route>
            </Routes>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
