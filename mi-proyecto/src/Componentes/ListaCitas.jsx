import Cita from "./Cita";

function ListaCitas({ citas }) {
  return (
    <div>
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  );
}

export default ListaCitas;