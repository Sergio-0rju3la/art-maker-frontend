import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GaleriaGeneral from './pages/GaleriaGeneral';
import FormularioObra from './pages/FormularioObra';

/**
 * App
 * Componente raíz de la aplicación.
 * Define la estructura general (Navbar y Footer fijos en todas las
 * pantallas) y las rutas de navegación entre las distintas páginas.
 */
function App() {
  return (
    <BrowserRouter>
      {/* Navbar se muestra siempre, sin importar la ruta actual */}
      <Navbar nombreUsuario="" />

      {/* Aquí se intercambia el contenido según la URL */}
      <Routes>
        <Route path="/" element={<GaleriaGeneral />} />
        <Route path="/publicar" element={<FormularioObra />} />
      </Routes>

      {/* Footer también se muestra siempre */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;