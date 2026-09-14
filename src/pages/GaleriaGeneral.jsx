import { useState, useEffect } from 'react';
import axios from 'axios';
import ObraCard from '../components/ObraCard';

/**
 * GaleriaGeneral
 * Pantalla principal que muestra todas las obras publicadas,
 * en una cuadrícula responsiva (1 columna en móvil, hasta 3 en escritorio),
 * con el mismo estilo que el diseño aprobado.
 */
function GaleriaGeneral() {
  const [obras, setObras] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/obras')
      .then((respuesta) => {
        setObras(respuesta.data);
        setCargando(false);
      })
      .catch(() => {
        setError('No se pudieron cargar las obras. Intenta de nuevo más tarde.');
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="text-white/60 text-center py-20">Cargando obras...</p>;
  }

  if (error) {
    return <p className="text-pink text-center py-20">{error}</p>;
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="font-serif text-2xl text-white mb-6">Galería de obras</h2>

      {obras.length === 0 ? (
        <p className="text-white/40 text-center py-20">
          Todavía no hay obras publicadas.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {obras.map((obra) => (
            <ObraCard
              key={obra.idObra}
              idObra={obra.idObra}
              titulo={obra.Titulo}
              imagen={obra.ImagenObra}
              descripcion={obra.Descripcion}
              precio={obra.Precio}
              estado={obra.Estado}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default GaleriaGeneral;