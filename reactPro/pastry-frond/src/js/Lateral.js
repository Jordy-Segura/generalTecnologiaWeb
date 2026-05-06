function Lateral() {
  return (
    <div id="lateral">
      <div id="cab-lateral">
        <i className="fa-solid fa-cake-candles"></i>
        <b>Mis Dulces Tareas</b>
        <small>Organiza tu día</small>
      </div>

      <div id="nav-lateral">
        <button className="enlace activo">Todas las tareas</button>
        <button className="enlace">Pendientes</button>
        <button className="enlace">Completadas</button>
      </div>

      <div id="promo">
        <i className="fa-solid fa-cookie-bite"></i>
        <p>"La disciplina es el ingrediente secreto de toda receta exitosa."</p>
      </div>
    </div>
  );
}

export default Lateral;