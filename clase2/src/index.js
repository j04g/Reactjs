
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'bulma/css/bulma.min.css';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App/>)

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Tu componente principal que contiene el Navbar, el Card y cualquier otro componente necesario.


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
*/

