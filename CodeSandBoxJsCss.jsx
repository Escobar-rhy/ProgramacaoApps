//App.jsx
import React from "react";
import Titulo1 from "../componentes/Titulo1";
import Paragrafo1 from "../componentes/Paragrafo1";
import Texto1 from "../componentes/Texto1";

export default function App() {
  return (
    <div>
      <Titulo1 />
      <Paragrafo1 />
      <Texto1 />
    </div>
  );
}

//Titulo1.js
import React from "react";
import "../Css/Titulo1.css";

export default function Titulo1() {
  return (
    <div>
      <h1 className="Titulo1">Titulo1</h1>
    </div>
  );
}

//Paragrafo1.js
import React from "react";

export default function Paragrafo1() {
  return (
    <div>
      <h3 className="Paragrafo1">Paragrafo1</h3>
    </div>
  );
}

//Texto1.js
import React from "react";

export default function Texto1() {
  return (
    <div>
      <h5 className="Texto1">Texto1</h5>
    </div>
  );
}

//Titulo1.css
//e restante
.Titulo1 {
  color: red;
}
.Paragrafo1 {
  color: yellow;
}
.Texto1 {
  color: green;
}
