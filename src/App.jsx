import React from 'react';
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
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';
import Alert from './Alert';
import UserProvider from './Providers/UserProvider';
import AlertProvider from './Providers/AlertProvider';
import CartProvider from './Providers/cartProvider';


function App() {
  console.log("App is rerunning");


  return (

    <>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Header />
            <Alert />
            <Routes>
              <Route index element={<ProdectPage />} />
              <Route
                path="/product/:id/detail"
                element={<ProdectDetails />}
              />
              <Route path="/cart" element={<AddToCart />} />
              <Route path="/login" element={<AuthRoute><LogIn /></AuthRoute>} />
              <Route path="/signUp" element={<AuthRoute><SignUp /></AuthRoute>} />
              <Route path="/forget" element={<ForgetPassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Futer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;






