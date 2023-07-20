import React from 'react';
import Navbar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';
import './components/Productos.js';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* productos */}
      <Card title="Producto 1" image="/public/producto1.jpg" description="Descripción del producto 1" price={19.99} />
      <Card title="Producto 2" image="/public/producto2.jpg" description="Descripción del producto 2" price={24.99} />
      {/* Otros componentes y contenido */}
      
      <Footer />
    </div>
  );
}

export default App;






