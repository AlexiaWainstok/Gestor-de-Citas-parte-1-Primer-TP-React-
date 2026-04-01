function Cita({ cita, eliminarCita }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>

      <button onClick={eliminarCita} className="button eliminar u-full-width">
        ELIMINAR ×
      </button>


    </div>
  );
}

export default Cita;

