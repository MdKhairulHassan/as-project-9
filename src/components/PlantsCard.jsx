import { FaStar, FaLeaf, FaShoppingCart, FaStore } from 'react-icons/fa';
import { Link } from 'react-router';

const PlantsCard = ({ plants }) => {
  const {
    plantId,
    plantName,
    category,
    price,
    rating,
    availableStock,
    careLevel,
    description,
    image,
    providerName,
  } = plants;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      {/* Image */}
      <figure className="relative">
        <img src={image} alt={plantName} className="h-56 w-full object-cover" />
        <span className="badge badge-success absolute top-3 left-3">
          {careLevel}
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        <h2 className="card-title text-green-700">
          <FaLeaf className="text-green-600" />
          {plantName}
        </h2>

        <p className="text-sm text-gray-500 font-bold">Category: {category}</p>

        <p className="text-sm text-gray-700 line-clamp-3 font-medium">
          Description:{' '}
          {description.length > 50 ? (
            <>
              {description.slice(0, 50)}...{' '}
              <Link
                to={`/plants-details/${plantId}`}
                className="font-bold text-red-600 cursor-pointer"
              >
                More Details
              </Link>
            </>
          ) : (
            description
          )}
        </p>

        {/* Rating & Price */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium">{rating}</span>
          </div>

          <span className="text-lg font-bold text-green-600">${price}</span>
        </div>

        {/* Extra Info */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Stock: {availableStock}</span>
          <span className="flex items-center gap-1">
            <FaStore /> {providerName}
          </span>
        </div>

        {/* Actions */}
        <div className="card-actions mt-4">
          <Link
            to={`/plants-details/${plantId}`}
            className="btn btn-success btn-sm w-full"
          >
            View Details
          </Link>
          <button className="btn bg-gray-300 text-gray-600 btn-sm w-full cursor-not-allowed">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantsCard;
