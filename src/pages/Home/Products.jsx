import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setJsonData(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? jsonData
        : jsonData.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(jsonData);
    setSelectedCategory("all");
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <div className="bg-cover bg-black text-white min-h-screen py-12 xl:px-28 px-4">
      <h2 className="text-3xl font-semibold text-center my-8 mt-24">
        Our Coffee Selection
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button
            onClick={showAll}
            className={`${selectedCategory === "all" ? "text-orange-500 font-bold" : ""} text-white hover:text-orange-500 transition-all duration-300`}
          >
            All Coffee
          </button>
          <button
            onClick={() => filterItems("Arabica")}
            className={`${selectedCategory === "Arabica" ? "text-orange-500 font-bold" : ""} text-white hover:text-orange-500 transition-all duration-300`}
          >
            Arabica
          </button>
          <button
            onClick={() => filterItems("Robusta")}
            className={`${selectedCategory === "Robusta" ? "text-orange-500 font-bold" : ""} text-white hover:text-orange-500 transition-all duration-300`}
          >
            Robusta
          </button>
          <button
            onClick={() => filterItems("Liberica")}
            className={`${selectedCategory === "Liberica" ? "text-orange-500 font-bold" : ""} text-white hover:text-orange-500 transition-all duration-300`}
          >
            Liberica
          </button>
          <button
            onClick={() => filterItems("Excelsa")}
            className={`${selectedCategory === "Excelsa" ? "text-orange-500 font-bold" : ""} text-white hover:text-orange-500 transition-all duration-300`}
          >
            Excelsa
          </button>
          <button
            onClick={() => filterItems("Luwak")}
            className={`${selectedCategory === "Luwak" ? "text-orange-500 font-bold" : ""} text-white hover:text-orange-500 transition-all duration-300`}
          >
            Luwak
          </button>
          <button
            onClick={() => filterItems("Blend")}
            className={`${selectedCategory === "Blend" ? "text-orange-500 font-bold" : ""} text-white hover:text-orange-500 transition-all duration-300`}
          >
            Blend
          </button>
        </div>

        {/* Sorting Options */}
        <div className="flex justify-end items-center space-x-2">
          <div className="bg-white p-2 rounded-sm">
            <FaFilter className="text-black h-4 w-4" />
          </div>
          <select
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-white text-black px-2 py-1 rounded-sm"
          >
            <option value="default"> Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <Card filteredItems={filteredItems} />
    </div>
  );
};

export default Products;
