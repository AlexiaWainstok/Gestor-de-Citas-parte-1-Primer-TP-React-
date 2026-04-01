import Label from "../Label";
import Input from "../Input";
import Boton from "../Index";
import"./Formulario.css"; 

function Formulario() {
  return (
    <div>
      <h2>Crear mi Cita</h2>

      <form>
        <Label texto="Nombre Mascota" />
        <Input tipo="text" />

        <Label texto="Nombre Dueño" />
        <Input tipo="text" />

        <Label texto="Fecha" />
        <Input tipo="date" />

        <Label texto="Hora" />
        <Input tipo="time" />

        <Label texto="Síntomas" />
        <textarea></textarea> 

        <Boton texto="Agregar Cita" />
      </form>


      
    </div>
  );
}

export default Formulario;