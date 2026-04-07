import { useState } from "react";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import ListaCitas from "./Componentes/ListaCitas";

function App() {

  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      id: 2,
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      id: 3,
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);

  const eliminarCita = (index) => {
    setCitas(citas.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="one-half">
            <Formulario />
          </div>

          <div className="one-half">
            <ListaCitas citas={citas} eliminarCita={eliminarCita} />
          </div>
          <div className="lista-citas"></div>
        </div>
      </div>
    </>
  );
}



export default App;