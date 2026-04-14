import BotonEliminar from "../BotonEliminar";
import "./Cita.css";

function Cita({ cita, eliminarCita }) {
  return (
    <div className="cita">
      <p>Mascota: {cita.mascota}</p>
      <p>Dueño: {cita.dueño}</p>
      <p>Fecha: {cita.fecha}</p>
      <p>Hora: {cita.hora}</p>
      <p>Sintomas: {cita.sintomas}</p>

      <BotonEliminar onClick={() => eliminarCita(cita.id)} />
    </div>
  );
}

export default Cita;
