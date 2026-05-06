import React from "react";
import "./styles/style.css";

import Barra from "./js/Barra";
import Menu from "./js/Menu";
import Lateral from "./js/Lateral";
import Cabecera from "./js/Cabecera";
import Formulario from "./js/Formulario";
import Filtros from "./js/Filtros";
import Lista from "./js/Lista";
import Pie from "./js/Pie";

function App() {
  return (
    <>
      <Barra />
      <Menu />

      <div id="estructura">
        <Lateral />

        <div id="contenido">
          <Cabecera />
          <Formulario />
          <Filtros />
          <Lista />
          <Pie />
        </div>
      </div>
    </>
  );
}

export default App;