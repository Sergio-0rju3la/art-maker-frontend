import { useState, useEffect } from 'react';
import axios from 'axios';
import ObraCard from '../components/ObraCard';

/**
 * GaleriaGeneral
 * Pantalla principal que muestra todas las obras publicadas.
 * Al montarse el componente, consulta la API para traer las obras
 * y las guarda en estado local para renderizarlas.
 */
function GaleriaGeneral() {
  // Estado que guarda el arreglo de obras traídas de la API
  const [obras, setObras] = useState([]);
  // Estado que indica si la petición sigue en curso
  const [cargando, setCargando] = useState(true);
  // Estado para mostrar un mensaje si algo falla
  const [error, setError] = useState(null);

  // Se ejecuta una sola vez, apenas el componente aparece en pantalla
  useEffect(() => {
    axios.get('http://localhost:3000/api/obras')
      .then((respuesta) => {
        setObras(respuesta.data);
        setCargando(false);
      })
      .catch((err) => {
        setError('No se pudieron cargar las obras. Intenta de nuevo más tarde.');
        setCargando(false);
      });
  }, []); // El arreglo vacío [] significa "ejecuta esto solo una vez"

  if (cargando) return <p>Cargando obras...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="galeria-general">
      <h2>Galería de obras</h2>
      <div className="galeria-general__grid">
        {obras.map((obra) => (
          <ObraCard
            key={obra.id}
            titulo={obra.titulo}
            imagen={obra.imagen}
            precio={obra.precio}
            estado={obra.estado}
          />
        ))}
      </div>
    </div>
  );
}

export default GaleriaGeneral;