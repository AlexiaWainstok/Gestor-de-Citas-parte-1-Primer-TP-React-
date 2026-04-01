import { useState } from "react";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import ListaCitas from "./Componentes/ListaCitas";

function App() {

  const eliminarCita = (index) => {
  setCitas(citas.filter((_, i) => i !== index));

  const [citas, setCitas] = useState([
    {
      mascota: "Firulais",
      dueño: "Juan",
      fecha: "20/03/2024",
      hora: "10:30",
      sintomas: "No come"
    }
  ]);


};

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <Formulario />
          <ListaCitas citas={citas} />
        </div>
      </div>
    </>
  );
}

export default App;