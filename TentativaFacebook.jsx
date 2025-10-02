//Apps.jsx
import React from "react";
import "../Css/styleFacebook.css";
import Cabecalho from "../componentes/Cabecalho";
import Pagina1 from "../componentes/Pagina1";
import Rodape from "../componentes/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Pagina1 />
      <Rodape />
    </div>
  );
}

//Cabecalho.js
import React from "react";

export default function Cabecalho() {
  return (
    <div>
      <h1 className="Cabecalho">Cabecalho</h1>
    </div>
  );
}

//Pagina1.js
import React from "react";

export default function Pagina1() {
  return (
    <div>
      <h3 className="Pagina1">Pagina1</h3>
    </div>
  );
}

//Rodape.js
import React from "react";

export default function Rodape() {
  return (
    <div>
      <h6 className="Rodape">Rodape</h6>
    </div>
  );
}

//Css - styleFacebook
