import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
//import Profile from './pages/Profile';
import Auth from './pages/Auth';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, footerAPI } from './data/data.js';
import PayCard from './pages/PayCard';
import Product from './pages/BookDetail';
import ProductList from './pages/ProductList';
import CheckoutPage from './pages/CheckoutPage';
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';
import BookDetails from './pages/BookDetail';
import ProfilePage from './pages/ProfilePage';
import Chat from './pages/Chat/Chat';
import ProductDetails from './pages/ProductDetails';


const AppRoutes = ({ shippingAddress, setShippingAdress }) => {
  const [displayCount, setDisplayCount] = useState(3);
  // console.log(endpoint)
  function handleShowMore() {
    setDisplayCount(displayCount + 3);
  }

  const routes = useRoutes([
    { path: '/auth', element: <Auth /> },
    { path: '/', element: <Home displayCount={displayCount} handleShowMore={handleShowMore} /> },
    { path: "/books/:category", element: <ProductList /> },
    { path: '/book/:id', element: <BookDetails /> },
    { path: '/checkout', element: <CheckoutPage shippingAddress={shippingAddress} setShippingAdress={setShippingAdress} /> },
    { path: '/pay', element: <PayCard /> },
    { path: '/success', element: <Success /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> }
  ]);

  return routes;
}

const App = () => {
  const [shippingAddress, setShippingAdress] = useState({
    isSameAddress: true,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",
  })

  return (
    <>
      <Navbar />
      <Cart />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </BrowserRouter>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;