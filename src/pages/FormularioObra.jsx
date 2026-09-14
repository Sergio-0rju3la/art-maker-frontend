import { useState } from 'react';
import axios from 'axios';

/**
 * FormularioObra
 * Pantalla con un formulario para publicar una obra nueva.
 * Cada campo es un componente controlado: su valor vive en el estado
 * de React, no en el DOM del navegador.
 */
function FormularioObra() {
  // Un estado por cada campo del formulario
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [estado, setEstado] = useState('Disponible');

  // Mensajes de confirmación o error tras enviar
  const [mensaje, setMensaje] = useState(null);

  /**
   * Se ejecuta cuando el usuario envía el formulario.
   * Evita el comportamiento por defecto del navegador (recargar la página)
   * y envía los datos a la API mediante POST.
   */
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nuevaObra = { titulo, descripcion, precio, imagen, estado };

    axios.post('http://localhost:3000/api/obras', nuevaObra)
      .then(() => {
        setMensaje('¡Obra publicada con éxito!');
        // Limpiamos el formulario después de publicar
        setTitulo('');
        setDescripcion('');
        setPrecio('');
        setImagen('');
        setEstado('Disponible');
      })
      .catch(() => {
        setMensaje('Hubo un error al publicar la obra. Intenta de nuevo.');
      });
  };

  return (
    <div className="formulario-obra">
      <h2>Publicar nueva obra</h2>

      <form onSubmit={manejarEnvio}>
        <label>
          Título
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>

        <label>
          Descripción
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>

        <label>
          Precio
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </label>

        <label>
          URL de la imagen
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </label>

        <label>
          Estado
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="Disponible">Disponible</option>
            <option value="Vendida">Vendida</option>
          </select>
        </label>

        <button type="submit">Publicar obra</button>
      </form>

      {mensaje && <p className="formulario-obra__mensaje">{mensaje}</p>}
    </div>
  );
}

export default FormularioObra;