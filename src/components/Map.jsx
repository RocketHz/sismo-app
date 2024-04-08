import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ latitude, longitude, info }) => {
   // Verifica si latitude y longitude están definidos
 if (latitude === undefined || longitude === undefined) {
  return null; // No renderiza el mapa si las coordenadas no están definidas
}
  return (
    <div className="mb-16">
      <h1>Instrucciones:</h1>
      <MapContainer
        center={[latitude, longitude]}
        zoom={2}
        className="h-96 w-full mb-4"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} className="mb-4">
          <Popup>{info}</Popup>
        </Marker>
      </MapContainer>
    </div>
        );
};

export default Map;