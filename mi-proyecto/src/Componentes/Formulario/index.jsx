
import Boton from "../Boton";
import Input from "../Input";
import "./Formulario.css"

function Formulario() {
  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        <Input label="Nombre Mascota" type="text" placeholder="Nombre Mascota" />
        <Input label="Nombre Dueño" type="text" placeholder="Nombre dueño de la mascota" />
        <Input label="Fecha" type="date" />
        <Input label="Hora" type="time" />

      <label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea>

        <Boton/>
      </form>
    </>
  );
}

export default Formulario;



