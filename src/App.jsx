import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProdectPage from './ProdectPage';
import ProdectDetails from './ProdectDetails';
import Futer from './Futer';
import NotFound from './NotFound';
import AddToCart from './AddToCart';
import LogIn from './LoginPage/LogIn';
import SignUp from './LoginPage/SignUp';
import ForgetPassword from './LoginPage/ForgetPassword';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';


export const CountContext = createContext();

function App() {
  console.log("App is rerunning");
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  const token = localStorage.getItem("token");


  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        setUser(response.data);
        setLoadingUser(false);
      });
    } else {
      setLoadingUser(false);
    }
  }, []);

  const handleAddToCard = (productId, count) => {
    const oldCount = cart[productId] || 0;

    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  };

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  if (loadingUser) {
    return <Loading />
  };

  return (
    <div>
      <Header productCount={totalCount} />
      <Routes>
        {/* <Route index element={<Dashboard user={user} />} /> */}
        <Route index element={<ProdectPage />} />
        <Route
          path="/product/:id/detail"
          element={<ProdectDetails onAddToCard={handleAddToCard} />}
        />

        <Route path="/cart" element={<AddToCart cart={cart} UpdateCart={updateCart} />} />
        <Route path="/login" element={<LogIn setUser={setUser} user={user} />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} user={user} />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Futer />
    </div>
  );
}

export default App;






