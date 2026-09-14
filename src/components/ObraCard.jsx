import { Link } from 'react-router-dom';

/**
 * ObraCard
 * Componente sin estado que muestra la información
 * resumida de una obra dentro de la galería, con el estilo de tarjeta
 * con overlay definido en el diseño aprobado.
 *
 * Props que recibe (nombres alineados con la API de Node/Express):
 * - idObra: number -> identificador de la obra
 * - titulo: string -> nombre de la obra
 * - imagen: string -> nombre del archivo de imagen de la obra
 * - descripcion: string -> descripción breve de la obra
 * - precio: string|number -> precio de la obra
 * - estado: number -> 0 = Disponible, 1 = Vendida
 */
function ObraCard({ idObra, titulo, imagen, descripcion, precio, estado }) {
  // URL donde el backend sirve las imagenes estaticas.
  // Ajusta esta ruta si tu carpeta de imagenes tiene otro nombre.
  const urlImagen = `http://localhost:3000/uploads/${imagen}`;
  const textoEstado = estado === 0 ? 'Disponible' : 'Vendida';

  return (
    <Link
      to={`/obra/${idObra}`}
      className="group relative block overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(107,63,160,0.4)]"
    >
      {/* Imagen de la obra */}
      <img
        src={urlImagen}
        alt={titulo || 'Obra sin título'}
        className="w-full aspect-square object-cover bg-violet/40 transition-transform duration-400 group-hover:scale-105"
      />

      {/* Overlay con la info, aparece sobre la imagen */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent">
        <h3 className="font-serif text-lg text-white font-bold">
          {titulo || 'Sin título'}
        </h3>
        <p className="text-white/60 text-xs mb-2 line-clamp-2">{descripcion}</p>
        <div className="flex items-center justify-between">
          <p className="text-pink text-sm font-bold">${precio}</p>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              estado === 0 ? 'bg-green-600/80' : 'bg-pink/80'
            }`}
          >
            {textoEstado}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ObraCard;