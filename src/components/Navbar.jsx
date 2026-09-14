import { Link } from 'react-router-dom';

/**
 * Navbar
 * Barra de navegación superior, visible en todas las pantallas.
 * Estilo tomado del diseño aprobado (paleta navy/pink/violet).
 * Componente sin estado propio: solo recibe el nombre del usuario por props.
 *
 * Props que recibe:
 * - nombreUsuario: string -> nombre del artista/usuario logueado (opcional)
 */
function Navbar({ nombreUsuario }) {
  return (
    <nav className="bg-navylt border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" className="font-serif text-xl tracking-tight text-white flex-shrink-0">
          Art<span className="text-violet">-</span>Maker
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-white/70 hover:text-white transition-colors">
            Galería
          </Link>
          <Link to="/publicar" className="text-white/70 hover:text-white transition-colors">
            Publicar obra
          </Link>
        </div>

        {/* Usuario logueado (si existe) */}
        {nombreUsuario && (
          <span className="text-white/80 text-sm flex-shrink-0">
            Hola, {nombreUsuario}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;