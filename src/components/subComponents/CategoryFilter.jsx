import React, { useState } from "react";

const CategoryFilter = ({ onFilterChange }) => {
 const [isOpen, setIsOpen] = useState(false);
 const [selectedFilters, setSelectedFilters] = useState([]);

 const toggleMenu = () => {
    setIsOpen(!isOpen);
 };

 const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters(prevFilters => {
      if (checked) {
        return [...prevFilters, value];
      } else {
        return prevFilters.filter(filter => filter !== value);
      }
    });
 };

 const applyFilters = () => {
    onFilterChange(selectedFilters);
    setIsOpen(false); // Cierra el menú después de aplicar los filtros
 };

 return (
    <div className="flex items-center justify-center p-4">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
        onClick={toggleMenu}
      >
        Categorias
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-50 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700 right-[28%]"
        >
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            {['md', 'ml', 'ms', 'mb', 'mw'].map((magType) => (
              <li key={magType} className="flex items-center">
                <input
                 id={magType}
                 type="checkbox"
                 value={magType}
                 onChange={handleFilterChange}
                 className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                 checked={selectedFilters.includes(magType)}
                />
                <label
                 htmlFor={magType}
                 className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                 {magType.toUpperCase()} ({Math.floor(Math.random() * 100)})
                </label>
              </li>
            ))}
          </ul>
          <button onClick={applyFilters} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Apply Filters
          </button>
          <button className="mt-4 bg-blue-50 hover:bg-blue-700 text-black font-bold py-1 px-4 rounded" onClick={() => onFilterChange('', setIsOpen(false))} >Reset Filter</button>
        </div>
      )}
    </div>
 );
};

export default CategoryFilter;
