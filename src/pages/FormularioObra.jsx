import { useState } from 'react';
import axios from 'axios';

/**
 * FormularioObra
 * Pantalla con un formulario para publicar una obra nueva.
 * Estilo de inputs tomado del modal "Crear obra" del diseño aprobado
 * (fondo oscuro, anillo rosa al hacer focus).
 * Cada campo es un componente controlado: su valor vive en el estado
 * de React, no en el DOM del navegador.
 */
function FormularioObra() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [estado, setEstado] = useState('Disponible');
  const [mensaje, setMensaje] = useState(null);

  /**
   * Se ejecuta cuando el usuario envía el formulario.
   * Evita el comportamiento por defecto del navegador (recargar la página)
   * y envía los datos a la API mediante POST, usando los nombres de
   * propiedad que espera el backend (camelCase).
   */
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nuevaObra = {
      titulo,
      imagenObra: imagen,
      descripcion,
      precio,
      estado: estado === 'Disponible' ? 0 : 1,
      idGaleria: 1 // ID de galería de prueba; ajustar cuando exista login real
    };

    axios.post('http://localhost:3000/api/obras', nuevaObra)
      .then(() => {
        setMensaje('¡Obra publicada con éxito!');
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

  // Clase reutilizable para todos los inputs, igual que en el mockup
  const estiloInput =
    'w-full bg-navylt border border-white/10 rounded-lg px-3 py-2 text-sm text-white ' +
    'placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink/60';

  return (
    <main className="max-w-md mx-auto px-6 py-10">
      <h2 className="font-serif text-2xl text-white mb-6">Publicar nueva obra</h2>

      <form onSubmit={manejarEnvio} className="space-y-4">
        <div>
          <label className="block text-xs text-violetlt mb-1">Título</label>
          <input
            type="text"
            placeholder="Ej. Atardecer en óleo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className={estiloInput}
            required
          />
        </div>

        <div>
          <label className="block text-xs text-violetlt mb-1">Descripción</label>
          <textarea
            rows="3"
            placeholder="Describe tu obra..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className={estiloInput}
            required
          />
        </div>

        <div>
          <label className="block text-xs text-violetlt mb-1">Precio</label>
          <input
            type="number"
            placeholder="0"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className={estiloInput}
            required
          />
        </div>

        <div>
          <label className="block text-xs text-violetlt mb-1">
            Nombre del archivo de imagen
          </label>
          <input
            type="text"
            placeholder="Ej. atardecer.jpg"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className={estiloInput}
            required
          />
        </div>

        <div>
          <label className="block text-xs text-violetlt mb-1">Estado</label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className={estiloInput}
          >
            <option value="Disponible">Disponible</option>
            <option value="Vendida">Vendida</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-full bg-pink hover:bg-pinklt text-sm font-medium text-white transition"
        >
          Publicar obra
        </button>
      </form>

      {mensaje && (
        <p className="text-white/80 text-sm mt-4 text-center">{mensaje}</p>
      )}
    </main>
  );
}

export default FormularioObra;