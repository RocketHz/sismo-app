import React, { useState } from "react";
import "./App.css";
import EarthquakeList from "./components/EarthquakeList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Map from "./components/Map";

export default function App() {
  const [apiUrl, setApiUrl] = useState("http://127.0.0.1:3000");
  const [selectedEarthquake, setSelectedEarthquake] = useState(null);

  const handleApiUrlChange = (newUrl) => {
    setApiUrl(newUrl);
  };

  const handleEarthquakeSelect = (earthquake) => {
    setSelectedEarthquake(earthquake);
  };

  const [comments, setComments] = useState([]);

const updateComments = (newComment) => {
 setComments([...comments, newComment]);
};

  return (
    <main className="bg-sky-500">
      <Navbar onApiUrlChange={handleApiUrlChange} />

      <Map
        latitude={selectedEarthquake?.attributes.coordinates.latitude}
        longitude={selectedEarthquake?.attributes.coordinates.longitude}
        info={selectedEarthquake?.attributes}
        links={selectedEarthquake?.links.external_url}
        comments={selectedEarthquake?.attributes.comments}
        apiUrl={apiUrl}
        updateComments={updateComments}
        className="mb-4"
      />

      <EarthquakeList
        apiUrl={apiUrl}
        onEarthquakeSelect={handleEarthquakeSelect}
      />

      <Footer />
    </main>
  );
}
