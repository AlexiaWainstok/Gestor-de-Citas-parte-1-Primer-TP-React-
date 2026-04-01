import Cita from "./Cita";

function ListaCitas({ citas }) {
  return (
    <div>
      <h2>Administra tus citas</h2>

      {citas.map((cita, index, eliminarCita) => (
        <Cita 
        key={index} 
        cita={cita} 
        eliminarCita={() => eliminarCita(index)}/>
      ))}

      
    </div>
  );
}

export default ListaCitas;