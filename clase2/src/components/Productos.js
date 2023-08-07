
import React from 'react';
import '../styles/Productos.css'; 
import Card from './Card';
import ItemCount from './Itemcount';
import CartWidget from './CartWidget';
import { useState } from 'react';





import avocadoToastImage from '../images/avocado toast.jpg';
import frenchToastImage from '../images/french-toast-3.jpeg';
import huevosRevueltosImage from '../images/huevos revueltos.jpg';
import croissantImage from '../images/croissant.jpg';
import yogurImage from '../images/Granola bowl.jpg';
import tostadasImage from '../images/tostado-jam-cheese-argentina-jamon-y-queso.jpg';
import pancakeImage from '../images/pancake.jpg';
import sandwichCrudoImage from '../images/sandwich crudo.jpg';
import omeletteImage from '../images/omelette.jpg';
import hamburguesaImage from '../images/hamburguesa.jpg';
import veggieBurgerImage from '../images/veggie burger.jpg';
import ensaladaCaesarImage from '../images/CaesarSalad.jpg';
import wrapVeggieImage from '../images/wrap veggie.jpg';
import wrapPolloImage from '../images/wrap.jpg';
import wrapPulledPorkImage from '../images/wrap pulled pork.jpg';
import ensaladaCobbImage from '../images/cobb-salad.jpg';
import tiramisuImage from '../images/Tiramisu.jpg';
import rogelImage from '../images/rogell.jpg';
import marquiseImage from '../images/marquise.jpg';
import lemonPieImage from '../images/lemon pie.jpg';
import keyLimePieImage from '../images/Klp.jpg';
import cheesecakeImage from '../images/cheesecake.jpg';
import alfajoresImage from '../images/alfajores.jpg';
import carrotCakeImage from '../images/Carrot cakke.jpg';




  const products = [
    {
      id: 101,
      nombre: "Avocado Toast",
      categoria: "desayunos y meriendas",
      precio: 1500,
      stock: 20,
      descripcion: "Toast Tostón, palta y huevo acompañado de tomates cherry.",
      img: avocadoToastImage
    },
    {
      id: 102,
      nombre: "French Toast",
      categoria: "desayunos y meriendas",
      precio: 1250,
      stock: 20,
      descripcion: "Dos tostadas francesas acompañadas de frutas de estación y caramelo.",
      img: frenchToastImage
    },
    {
      id: 103,
      nombre: "Huevos Revueltos",
      categoria: "desayunos y meriendas",
      precio: 1050,
      stock: 20,
      descripcion: "Huevos revueltos con toston, panceta o palta acompañado de tomates cherrys.",
      img: huevosRevueltosImage
    },
    {
      // Continúa con los demás productos de manera similar
      id: 104,
      nombre: "Croissant relleno",
      categoria: "desayunos y meriendas",
      precio: 1000,
      stock: 20,
      descripcion: "Croissant De jamón y queso.",
      img: croissantImage
    },
    {
      id: 105,
      nombre: "Yogur de la casa",
      categoria: "desayunos y meriendas",
      precio: 1800,
      stock: 20,
      descripcion: "Yogur con Granola Casera y Frutas de Estación Yogur casero, granola y frutas de estación.",
      img: yogurImage
    },
    {
      id: 106,
      nombre: "Tostadas",
      categoria: "desayunos y meriendas",
      precio: 900,
      stock: 20,
      descripcion: "Dos tostadas acompañadas de queso crema y mermelada.",
      img: tostadasImage
    },
    {
      id: 107,
      nombre: "Pancake Proteico",
      categoria: "desayunos y meriendas",
      precio: 1150,
      stock: 20,
      descripcion: "Pancake de avena y banana con matequilla de maní, mermelada, frutas de estación y caramelo.",
      img: pancakeImage
    },
    {
      id: 108,
      nombre: "Sandwich de Crudo Jamón crudo",
      categoria: "desayunos y meriendas",
      precio: 1550,
      stock: 20,
      descripcion: "Sandwich de Crudo Jamón crudo, rúcula, tomate y queso.",
      img: sandwichCrudoImage
    },
    {
      id: 109,
      nombre: "Omelette De jamón y queso",
      categoria: "desayunos y meriendas",
      precio: 1750,
      stock: 20,
      descripcion: "Omelette De jamón y queso acompañado de tomates cherry. De queso, tomate y albahaca, acompañado de tomates cherry.",
      img: omeletteImage
    },
    {
      id: 201,
      nombre: "Hamburguesas Tranca la Palanca",
      categoria: "Platos principales",
      precio: 2000,
      stock: 20,
      descripcion: "Hamburguesas Tranca la Palanca 100% carne vacuna, queso cheddar, panceta, cebolla caramelizada, lechuga y tomate.",
      img: hamburguesaImage
    },
    {
      id: 202,
      nombre: "Veggie Burger",
      categoria: "Platos principales",
      precio: 1800,
      stock: 20,
      descripcion: "Veggie Burger 100% vegetariana con lechuga, tomate, cebolla, pepino y guacamole.",
      img: veggieBurgerImage
    },
    {
      id: 203,
      nombre: "Ensalada Caesar",
      categoria: "Platos principales",
      precio: 1600,
      stock: 20,
      descripcion: "Ensalada Caesar con pollo a la parrilla, lechuga, croutones y aderezo Caesar.",
      img: ensaladaCaesarImage
    },
    {
      id: 204,
      nombre: "Wrap Veggie",
      categoria: "Platos principales",
      precio: 1700,
      stock: 20,
      descripcion: "Wrap Veggie con queso crema, espinaca, zanahoria, remolacha, repollo morado y tomates secos.",
      img: wrapVeggieImage
    },
    {
      id: 205,
      nombre: "Wrap de Pollo",
      categoria: "Platos principales",
      precio: 1900,
      stock: 20,
      descripcion: "Wrap de Pollo con pollo a la parrilla, mix de hojas verdes, zanahoria, tomate, queso y aderezo.",
      img: wrapPolloImage
    },
    {
      id: 206,
      nombre: "Wrap Pulled Pork",
      categoria: "Platos principales",
      precio: 2100,
      stock: 20,
      descripcion: "Wrap Pulled Pork con cerdo desmechado en salsa barbacoa, repollo morado y zanahoria.",
      img: wrapPulledPorkImage
    },
    {
      id: 207,
      nombre: "Ensalada Cobb",
      categoria: "Platos principales",
      precio: 2200,
      stock: 20,
      descripcion: "Ensalada Cobb con pollo a la parrilla, panceta, huevo, tomate, aguacate, queso roquefort y mix de hojas verdes.",
      img: ensaladaCobbImage
    },
    {
      id: 301,
      nombre: "Tiramisú",
      categoria: "Postres",
      precio: 1400,
      stock: 20,
      descripcion: "Tiramisú tradicional con queso mascarpone y bizcochos bañados en café.",
      img: tiramisuImage
    },
    {
      id: 302,
      nombre: "Rogel",
      categoria: "Postres",
      precio: 1300,
      stock: 20,
      descripcion: "Postre Rogel con dulce de leche, merengue y crema.",
      img: rogelImage
    },
    {
      id: 303,
      nombre: "Marquise de chocolate",
      categoria: "Postres",
      precio: 1600,
      stock: 20,
      descripcion: "Marquise de chocolate con galletas de champagne y crema chantilly.",
      img: marquiseImage
    },
    {
      id: 304,
      nombre: "Lemon Pie",
      categoria: "Postres",
      precio: 1200,
      stock: 20,
      descripcion: "Lemon Pie con masa crocante, lemon curd y merengue.",
      img: lemonPieImage
    },
    {
      id: 305,
      nombre: "Key Lime Pie",
      categoria: "Postres",
      precio: 1400,
      stock: 20,
      descripcion: "Key Lime Pie con masa crocante, crema de lima y merengue.",
      img: keyLimePieImage
    },
    {
      id: 306,
      nombre: "Cheesecake",
      categoria: "Postres",
      precio: 1500,
      stock: 20,
      descripcion: "Cheesecake clásica con base de galletas y salsa de frutos rojos.",
      img: cheesecakeImage
    },
    {
      id: 307,
      nombre: "Alfajores de maicena",
      categoria: "Postres",
      precio: 900,
      stock: 20,
      descripcion: "Alfajores de maicena rellenos de dulce de leche.",
      img: alfajoresImage
    },
    {
      id: 308,
      nombre: "Carrot Cake",
      categoria: "Postres",
      precio: 1100,
      stock: 20,
      descripcion: "Carrot Cake con nueces y glaseado de queso crema.",
      img: carrotCakeImage
    },
    // Continúa con los demás productos de manera similar
  ];

  const Productos = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
  
    const handleSearch = (searchWord, searchPrice, searchCategory) => {
      const filtered = products.filter((product) => {
        const productName = product.nombre ? product.nombre.toLowerCase() : '';
        const category = product.categoria ? product.categoria.toLowerCase() : '';
        const price = parseFloat(product.precio);
  
        return (
          (!searchWord || productName.includes(searchWord.toLowerCase())) &&
          (isNaN(searchPrice) || !searchPrice || price <= parseFloat(searchPrice)) &&
          (!searchCategory || category.includes(searchCategory.toLowerCase()))
        );
      });
  
      setFilteredProducts(filtered);
    };
  
    const [cartItemCount, setCartItemCount] = useState(0);
  
    // Función para agregar productos al carrito
    const addToCart = (count) => {
      setCartItemCount((prevCount) => prevCount + count);
    };
  
    return (
      <div>
        {/* Tu componente SearchBar aquí */}
        <div className="card-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Card producto={product} />
              <ItemCount stock={product.stock} onAdd={(count) => addToCart(count)} />
  
              {/* Asegúrate de pasar la función addToCart como prop a Card */}
              <button className="add-to-cart-button" onClick={() => addToCart(1)}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
        <div>
          <CartWidget stock={cartItemCount} />
        </div>
      </div>
    );
  };
  
  export default Productos;