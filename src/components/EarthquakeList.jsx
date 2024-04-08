import React, { useEffect, useState } from "react";
import { fetchEarthquakes } from "../services/apiService";
import EarthquakeCard from "./subComponents/EarthquakeCard";
import Pagination from "./Pagination";

const EarthquakeList = ({ apiUrl, onEarthquakeSelect }) => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadEarthquakes = async () => {
      const response = await fetchEarthquakes(apiUrl, currentPage);
      setEarthquakes(response.data);
      setTotalPages(
        Math.ceil(response.pagination.total / response.pagination.per_page)
      );
    };

    loadEarthquakes();
  }, [apiUrl, currentPage]);

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="flex fle">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Seleccione una carta sismica</h2>
        <p>Puede seleccionar una carta sismica para mirar el mapa. <span className="text-red-700 font-bold">Tenga en cuenta que pulsar en <span className="text-blue-800">"mas informacion"</span> lo redireccionara al servicio de la USGS</span></p>
      </div>
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
