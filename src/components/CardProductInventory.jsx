import PropTypes from "prop-types";
//AVERIGUAR MANEJO DE DIMENSION DE IMAGEN

export const CardProductInventory = ({ title, price, image }) => {
  return (
    <div className="flex justify-between items-center border-b-2 py-6 px-4">
      <div className="flex justify-center items-center gap-6">
        <img className="w-10" src={image} alt={title.slice(0,10)} />
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">{title.slice(0,20)}</h4>
          <div className="flex gap-4">
            <span>Activo</span>
            <span>Hay stock</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>${price.toFixed(2)}</span>
        <button className="border shadow p-1 md:p-2 rounded-md">
          Editar producto
        </button>
      </div>
    </div>
  );
};

CardProductInventory.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
