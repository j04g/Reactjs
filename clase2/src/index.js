import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'bulma/css/bulma.min.css';
import searchImage from './Api';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

searchImage()
  .then((response) => {
    // Aquí puedes ver la respuesta completa de la API en la consola
    console.log('Respuesta de la API:', response.data);
    root.render(<App />);
  })
  .catch((error) => {
    // Aquí puedes manejar el error si ocurre
    console.error('Error en la API:', error);
    // Aquí puedes renderizar la aplicación de todas formas o mostrar un mensaje de error al usuario
    root.render(<App />);
  });
