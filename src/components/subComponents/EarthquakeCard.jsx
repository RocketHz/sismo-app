// EarthquakeCard.js
import React from "react";

const EarthquakeCard = ({ earthquake, onSelect }) => {
  return (
    <div onClick={onSelect} className="block rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center max-w-xs">
      <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
        <h2 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
          {earthquake.attributes.title}
        </h2>
      </div>

      <div className="p-6 flex flex-col justify-center items-center gap-1">
        <p className="b-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
          Lugar: {earthquake.attributes.place}
        </p>
        <p className="max-w-min whitespace-nowrap rounded-[0.27rem] bg-blue-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-700">
          Magnitud: {earthquake.attributes.magnitude}
        </p>
        <p className="max-w-min whitespace-nowrap rounded-[0.27rem] bg-gray-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-700">Tiempo: {new Date(earthquake.attributes.time).toLocaleString()}</p>
        <p className="max-w-min whitespace-nowrap rounded-[0.27rem] bg-gray-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-700">Tsunami: {earthquake.attributes.tsunami ? "Sí" : "No"}</p>
        <p className="max-w-min whitespace-nowrap rounded-[0.27rem] bg-gray-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-700">Tipo de magnitud: {earthquake.attributes.mag_type}</p>
        <a
          href={earthquake.links.external_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Más información
        </a>
        <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
          <p className="flex items-center justify-center text-neutral-500 dark:text-neutral-300 flex-col">
            <a className="">
              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-700">Coordenadas:</span> <span className="ml-2">{earthquake.attributes.coordinates.latitude}</span>,
              <span className="ml-2">{earthquake.attributes.coordinates.longitude}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeCard;
