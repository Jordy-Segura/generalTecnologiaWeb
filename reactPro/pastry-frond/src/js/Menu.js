function Menu() {
  return (
    <div id="menu">
      <button className="enlace"><i className="fa-solid fa-cake-candles"></i> Todas</button>
      <button className="enlace"><i className="fa-solid fa-clock"></i> Pendientes</button>
      <button className="enlace"><i className="fa-solid fa-check-circle"></i> Completadas</button>
      <button className="enlace"><i className="fa-solid fa-gear"></i> Ajustes</button>
    </div>
  );
}

export default Menu;