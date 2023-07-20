import React from 'react';
import Card from './Card';

const ProductList = () => {
  // Datos de ejemplo para los "Cards"
  const products = [
        {
        id: 101,
        nombre: "Avocado Toast",
        categoria: "desayunos y meriendas",
        precio: 1500,
        stock: 20,
        descripcion:"Toast Tostón, palta y huevo acompañado de tomates cherry.",
        img: "./avocado toast.jpg"
      },
    
      {
        id: 102,
        nombre: "French Toast",
        categoria: "desayunos y meriendas",
        precio: 1250,
        stock: 20,
        descripcion:"Dos tostadas francesas acompañadas de frutas de estación y caramelo.",
        img: "./french-toast-3.jpeg"
      },
      {
        id: 103,
        nombre: "Huevos Revueltos",
        categoria: "desayunos y meriendas",
        precio: 1050,
        stock: 20,
        descripcion:"Huevos revueltos con toston, panceta o palta acompañado de tomates cherrys.",
        img: "./huevos revueltos.jpg"
      },
      {
        id: 104,
        nombre: "Croissant relleno",
        categoria: "desayunos y meriendas",
        precio: 1000,
        stock: 20,
        descripcion:"Croissant De jamón y queso.",
        img: "./croissant.jpg"
      },
      {
        id: 105,
        nombre: "Yogur de la casa",
        categoria: "desayunos y meriendas",
        precio: 1800,
        stock: 20,
        descripcion:"Yogur con Granola Casera y Frutas de Estación Yogur casero, granola y frutas de estación.",
        img: "./Granola bowl.jpg"
      },
      {
        id: 106,
        nombre: "Tostadas",
        categoria: "desayunos y meriendas",
        precio: 900,
        stock: 20,
        descripcion:"Dos tostadas acompañadas de queso crema y mermelada.",
        img: "./tostado-jam-cheese-argentina-jamon-y-queso.jpg"
      },
      {
        id: 107,
        nombre: "Pancake Proteico",
        categoria: "desayunos y meriendas",
        precio: 1150,
        stock: 20,
        descripcion:"Pancake de avena y banana con matequilla de maní, mermelada, frutas de estación y caramelo.",
        img: "./pancake.jpg"
      },
      
      {
        id: 108,
        nombre: "Sandwich de Crudo Jamón crudo",
        categoria: "desayunos y meriendas",
        precio: 1550,
        stock: 20,
        descripcion:"Sandwich de Crudo Jamón crudo, rúcula, tomate y queso.",
        img: "./sandwich crudo.jpg"
      },
      {
        id: 109,
        nombre: "Omelette De jamón y queso",
        categoria: "desayunos y meriendas",
        precio: 1750,
        stock: 20,
        descripcion: "Omelette De jamón y queso acompañado de tomates cherry. De queso, tomate y albahaca, acompañado de tomates cherry." , 
        img: "./omelette.jpg"
      },
    
    {
        id: 201,
        nombre: "Hamburguesas Tranca la Palanca",
        categoria: "Platos principales",
        precio: 2000,
        stock: 20,
        descripcion:"Dos medallones de carne, panceta, cebolla caramelizada, queso cheddar y huevo.",
        img: "./hamburguesa.jpg"
      },
      {
        id: 202,
        nombre: "Veggie burguer",
        categoria: "Platos principales",
        precio: 2050,
        stock: 20,
        descripcion:"Hamburguesa vegetariana cebolla caramelizada, queso danbo, palta y mayonesa de zanahoria.",
        img: "./veggie burger.jpg"
      },
      {
        id: 203,
        nombre: "Ensalada Caesar",
        categoria: "Platos principales",
        precio: 2100,
        stock: 20,
        descripcion:"Ensalada, pollo, tomates, queso parmesano, semillas, croutones y vinagreta especial de mayonesa y anchoas.",
        img: "./CaesarSalad.jpg"
      },
      {
        id: 204,
        nombre: "Wrap Veggie",
        categoria: "Platos principales",
        precio: 2150,
        stock: 20,
        descripcion:"Verduras salteadas, queso crema con ciboulette, huevo y palta.",
        img: "./wrap veggie.jpg"
      },
      {
        id: 205,
        nombre: "Wrap Pollo",
        categoria: "Platos principales",
        precio: 2200,
        stock: 20,
        descripcion:"Pollo, queso crema con ciboulette, cebolla caramelizada, palta y espinaca.",
        img: "./wrap.jpg"
      },
      {
        id: 206,
        nombre: "Wrap Pulled Pork",
        categoria: "Platos principales",
        precio: 2250,
        stock: 20,
        descripcion:"Bondiola braseada con barbacoa y coleslaw.",
        img: "./wrap pulled pork.jpg"
      },
        {
        id: 207,
        nombre: "Ensalada Cobb",
        categoria: "Platos principales",
        precio: 2350,
        stock: 20,
        descripcion:"Verdes, pollo, panceta, queso azul, palta y tomate.",
        img: "./cobb-salad.jpg"
      },
      {
        id: 301,
        nombre: "Tiramisú",
        categoria: "Tortas, postres y delicias",
        precio: 1000,
        stock: 20,
        descripcion:"Clásico postre italiano con vainillas, almíbar de café y crema mascarpone.",
        Formato: "porción individual",
        img: "./Tiramisu.jpg"
      },
      {
        id: 302,
        nombre: "Rogel",
        categoria: "Tortas, postres y delicias",
        precio: 1100,
        stock: 20,
        descripcion:"Especialidad de la casa con más de 10 capas de masa y dulce de leche bajo una montaña de merengue.",
        img: "./rogell.jpg"
      },
      {
        id: 303,
        nombre: "Marquise",
        categoria: "Tortas, postres y delicias",
        precio: 1150,
        stock: 20,
        descripcion:"Base bombón de chocolate con dulce de leche y merengue.",
        img: "./marquise.jpg"
      },
      {
        id: 304,
        nombre: "Lemon pie",
        categoria: "Tortas, postres y delicias",
        precio: 1200,
        stock: 20,
        descripcion:"Clásico internacional si los hay: tarta de limón y merengue.",
        img: "./lemon pie.jpg"
      },
      {
        id: 305,
        nombre: "Key Lime Pie",
        categoria: "Tortas, postres y delicias",
        precio: 1250,
        stock: 20,
        descripcion:"Torta de crema de jugo de limas y leche condensada en su base de cookie crumbs.",
        img: "./Klp.jpg"
      },
      {
        id: 306,
        nombre: "Cheesecake",
        categoria: "Tortas, postres y delicias",
        precio: 1300,
        stock: 20,
        descripcion:"Cheesecake de chocolate blanco, bañada en salsa de frutos rojos.",
        img: "./cheesecake.jpg"
      },
      {
        id: 307,
        nombre: "Alfajores",
        categoria: "Tortas, postres y delicias",
        precio: 1350,
        stock: 20,
        descripcion:"Alfajor gigante relleno de dulce de leche, a elección: maicena, chocolate negro o blanco, de nuezo o almendra",
        img: ""
      },
       {
        id: 308,
        nombre: "Carrot Cake",
        categoria: "Tortas, postres y delicias",
        precio: 1400,
        stock: 20,
        descripcion:"Esponjoso bizcochuelo a base de zanahoria dulce, relleno de frutos secos y pasas de uva y relleno de crema unctuosa especial.",
        img: "./Carrot cakke.jpg"
      },
  ];

  return (
    <div>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
