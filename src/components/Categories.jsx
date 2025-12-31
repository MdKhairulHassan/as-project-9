import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
  // console.log(categoryPromise);
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map(category => (
          <NavLink
            key={category.id}
            className={
              'px-4 py-2 bg-white hover:bg-secondary font-semibold text-black'
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
