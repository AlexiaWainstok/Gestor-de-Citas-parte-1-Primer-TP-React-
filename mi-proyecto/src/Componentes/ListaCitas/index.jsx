import Cita from "../Cita";
import "./ListaCitas.css";

function ListaCitas({ citas, eliminarCita }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita) => (
        <Cita
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
        />
      ))}
    </>
  );
}

export default ListaCitas;