import { FaTint, FaSun, FaLeaf } from 'react-icons/fa';

const iconMap = {
  water: <FaTint className="text-blue-500 text-3xl" />,
  sun: <FaSun className="text-yellow-500 text-3xl" />,
  leaf: <FaLeaf className="text-green-600 text-3xl" />,
};

const PlantCareCard = ({ tip }) => {
  const { title, icon, tips } = tip;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      <div className="card-body">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-2">
          {iconMap[icon]}
          <h2 className="card-title text-green-700">{title}</h2>
        </div>

        {/* Tips List */}
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {tips.slice(0, 5).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Optional Action */}
        <div className="card-actions mt-4 justify-end">
          <button className="btn btn-outline btn-sm bg-gray-400 text-gray-200 cursor-not-allowed">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCareCard;
