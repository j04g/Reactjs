import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductList from './components/Productos';
import Carrito from './components/Carrito';

const App = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (count) => {
    setCartItemCount((prevCount) => prevCount + count);
  };

  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItemCount} />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tienda">
            <ProductList addToCart={addToCart} />
          </Route>
          <Route path="/carrito" component={Carrito} />
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

