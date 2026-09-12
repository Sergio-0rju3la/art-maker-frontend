/**
 * ObraCard
 * Componente sin estado (presentacional) que muestra la información
 * resumida de una obra dentro de la galería.
 * 
 * Props que recibe:
 * - titulo: string = nombre de la obra
 * - imagen: string = URL de la imagen de la obra
 * - precio: number = precio de la obra
 * - estado: string = "Disponible" o "Vendida"
 */
function ObraCard({ titulo, imagen, precio, estado }) {
  return (
    <div className="obra-card">
      <img src={imagen} alt={titulo} className="obra-card__imagen" />
      <h3 className="obra-card__titulo">{titulo}</h3>
      <p className="obra-card__precio">${precio}</p>
      <span className="obra-card__estado">{estado}</span>
    </div>
  );
}

export default ObraCard;