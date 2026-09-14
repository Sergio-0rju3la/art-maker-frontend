import { Link } from 'react-router-dom';

/**
 * Navbar
 * Barra de navegación superior, visible en todas las pantallas.
 * Es un componente sin estado: solo recibe el nombre del usuario
 * por props y muestra enlaces de navegación.
 *
 * Props que recibe:
 * - nombreUsuario: string -> nombre del artista/usuario logueado (opcional)
 */
function Navbar({ nombreUsuario }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Art-Maker</Link>

      <div className="navbar__enlaces">
        <Link to="/">Galería</Link>
        <Link to="/publicar">Publicar obra</Link>
      </div>

      {nombreUsuario && (
        <span className="navbar__usuario">Hola, {nombreUsuario}</span>
      )}
    </nav>
  );
}

export default Navbar;