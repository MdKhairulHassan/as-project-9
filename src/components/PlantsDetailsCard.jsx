import { useState } from 'react';
import { FaStar, FaLeaf, FaBoxOpen } from 'react-icons/fa';

const PlantsDetailsCard = ({ plants }) => {
  const { plantName, description, price, rating, availableStock, image } =
    plants;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Show success toast
    setShowToast(true);

    // Clear form
    setFormData({ name: '', email: '' });

    // Hide toast after 3s
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="p-6">
      {/* Success Toast */}
      {showToast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>Consultation booked successfully!</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Large Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={plantName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
            <FaLeaf className="text-green-600" />
            {plantName}
          </h1>

          <p className="text-gray-700 leading-relaxed">{description}</p>

          {/* Info Row */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span className="font-medium text-gray-700">{rating} Rating</span>
            </div>

            <div className="flex items-center gap-1 text-gray-600">
              <FaBoxOpen />
              <span>{availableStock} in stock</span>
            </div>
          </div>

          <p className="text-2xl font-bold text-green-600">${price}</p>

          {/* Divider */}
          <div className="divider"></div>

          {/* Book Consultation Form */}
          <h2 className="text-xl font-semibold text-green-700">
            Book Consultation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered ml-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered ml-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-full">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetailsCard;
