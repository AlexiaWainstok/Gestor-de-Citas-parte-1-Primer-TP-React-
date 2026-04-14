import { useState } from "react";
import Boton from "../Boton";
import Input from "../Input";
import "./Formulario.css";

function Formulario({ agregarCita }) {

  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarCita({
      ...cita,
      id: Date.now()
    });
  };

  return (
    <>
      <h2>Crear mi Cita</h2>

      <form onSubmit={handleSubmit}>
        
        <Input
          label="Nombre Mascota"
          type="text"
          name="mascota"
          onChange={handleChange}
        />

        <Input
          label="Nombre Dueño"
          type="text"
          name="dueño"
          onChange={handleChange}
        />

        <Input
          label="Fecha"
          type="date"
          name="fecha"
          onChange={handleChange}
        />

        <Input
          label="Hora"
          type="time"
          name="hora"
          onChange={handleChange}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
        ></textarea>

        <Boton type="submit" />

      </form>
    </>
  );
}

export default Formulario;