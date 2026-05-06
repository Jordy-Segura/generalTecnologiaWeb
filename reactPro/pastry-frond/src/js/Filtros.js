function Filtros() {
  return (
    <div className="tarjeta">
      <h2><i className="fa-solid fa-filter"></i> Filtrar tareas</h2>

      <div id="filtros">
        <div>
          <button className="filtro activo">Todas</button>
          <button className="filtro">Pendientes</button>
          <button className="filtro">Completadas</button>
        </div>

        <div id="datos">
          <div className="dato"><span>0</span><small>Total</small></div>
          <div className="dato"><span>0</span><small>Pendientes</small></div>
          <div className="dato"><span>0</span><small>Completadas</small></div>
        </div>
      </div>
    </div>
  );
}

export default Filtros;