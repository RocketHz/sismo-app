import React, { useEffect, useState } from "react";
import { fetchEarthquakes } from "../services/apiService";
import EarthquakeCard from "./subComponents/EarthquakeCard";
import Pagination from "./Pagination";
import CategoryFilter from "./subComponents/CategoryFilter";

const EarthquakeList = ({ apiUrl, onEarthquakeSelect }) => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filterType, setFilterType] = useState("");
 
  useEffect(() => {
    const loadEarthquakes = async () => {
       const response = await fetchEarthquakes(apiUrl, currentPage, filterType);
       setEarthquakes(response.data);
       setTotalPages(
         Math.ceil(response.pagination.total / response.pagination.per_page)
       );
    };
   
    loadEarthquakes();
   }, [apiUrl, currentPage, filterType]); 
 
  useEffect(() => {
      setCurrentPage(1); // Resetea la página actual a 1 cuando cambia el filtro
  }, [filterType]);
 
  const handlePrev = () => {
      setCurrentPage((prevPage) => prevPage - 1);
  };
 
  const handleNext = () => {
      setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Seleccione una carta sismica
        </h2>
        <p className="mb-6">
          Puede seleccionar una carta sismica para mirar el mapa.{" "}
          <span className="text-red-700 font-bold">
            Tenga en cuenta que pulsar en{" "}
            <span className="text-blue-800">"mas informacion"</span> lo
            redireccionara al servicio de la USGS
          </span>
        </p>
      </div>
      <CategoryFilter onFilterChange={setFilterType} />
      <div className="flex gap-12 justify-center flex-wrap">
        {earthquakes.map((earthquake) => (
          <EarthquakeCard
            key={earthquake.id}
            earthquake={earthquake}
            onSelect={() => onEarthquakeSelect(earthquake)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default EarthquakeList;
