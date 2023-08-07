import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import ItemCount from './Itemcount';


const CartWidget = ({ stock }) => {
    return (
      <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} />
        <ItemCount stock={stock} />
      </div>
    );
  }
  
  export default CartWidget;
