function Formulario() {
  return (
    <div className="tarjeta">
      <h2><i className="fa-solid fa-plus"></i> Agregar nueva tarea</h2>

      <div id="formulario">
        <div className="campo grande">
          <label>Tarea</label>
          <input type="text" placeholder="¿Qué necesitas hornear?" />
          <small className="error"></small>
        </div>

        <div className="campo">
          <label>Prioridad</label>
          <select>
            <option>Media</option>
            <option>Alta</option>
            <option>Baja</option>
          </select>
        </div>

        <div className="campo">
          <label>Fecha</label>
          <input type="date" />
        </div>
      </div>

      <button>
        <i className="fa-solid fa-bread-slice"></i> Agregar Tarea
      </button>
    </div>
  );
}

export default Formulario;