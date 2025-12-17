import { ChevronDown } from "lucide-react";
import { useState } from "react";
import brands from "../data/brands.json";
const Filtersbar = () => {
  const [expandedFilters, setExpandedFilters] = useState({
    category: true,
    price: true,
    brands: true,
  });
  return (
    <>
      <aside className="w-64 shrink-0">
        {/* Category Filter */}
        <div className="bg-white border-b border-b-gray-500 text-gray-700 p-4 mb-4">
          <button
            className="flex items-center justify-between w-full font-semibold mb-3"
            onClick={() =>
              setExpandedFilters({
                ...expandedFilters,
                category: !expandedFilters.category,
              })
            }
          >
            Category
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedFilters.category ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedFilters.category && (
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between cursor-pointer hover:text-orange-500">
                <span>Shop Pushchairs</span>
                <span className="text-gray-500">(128)</span>
              </li>
              <li className="flex items-center justify-between cursor-pointer hover:text-orange-500">
                <span>Pushchair Accessories</span>
                <span className="text-gray-500">(77)</span>
              </li>
              <li className="flex items-center justify-between cursor-pointer hover:text-orange-500">
                <span>Footmuffs</span>
                <span className="text-gray-500">(31)</span>
              </li>
              <li className="flex items-center justify-between cursor-pointer hover:text-orange-500">
                <span>Top Brands</span>
                <span className="text-gray-500">(147)</span>
              </li>
            </ul>
          )}
        </div>

        {/* Price Filter */}
        <div className="bg-white p-4 mb-4 border-b border-b-gray-500 text-gray-700">
          <button
            className="flex items-center justify-between w-full font-semibold mb-3"
            onClick={() =>
              setExpandedFilters({
                ...expandedFilters,
                price: !expandedFilters.price,
              })
            }
          >
            Price
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedFilters.price ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedFilters.price && (
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between cursor-pointer hover:text-orange-500">
                <span>£0.00 - £999.99</span>
                <span className="text-gray-500">(133)</span>
              </li>
              <li className="flex items-center justify-between cursor-pointer hover:text-orange-500">
                <span>£1,000.00 and above</span>
                <span className="text-gray-500">(35)</span>
              </li>
            </ul>
          )}
        </div>

        {/* Brands Filter */}
        <div className="bg-white border-b border-b-gray-500 text-gray-700 p-4">
          <button
            className="flex items-center justify-between w-full font-semibold mb-3"
            onClick={() =>
              setExpandedFilters({
                ...expandedFilters,
                brands: !expandedFilters.brands,
              })
            }
          >
            Brands
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedFilters.brands ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedFilters.brands && (
            <ul className="space-y-2 text-sm max-h-96 overflow-y-auto">
              {brands.map((brand) => (
                <li
                  key={brand.name}
                  className="flex items-center justify-between cursor-pointer hover:text-orange-500"
                >
                  <span>{brand.name}</span>
                  <span className="text-gray-500">({brand.count})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};

export default Filtersbar;
