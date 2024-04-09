import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { createComment } from "../services/apiService";


const Map = ({ latitude, longitude, info, links, comments, apiUrl, updateComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    try {
      const newCommentData = await createComment(
        apiUrl,
        info.external_id,
        newComment
      );
      updateComments(newCommentData);
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (latitude === undefined || longitude === undefined) {
    return null;
  }
  return (
    <div className="mb-16">
      <MapContainer
        center={[latitude, longitude]}
        zoom={2}
        className="h-96 w-full mb-4 mt-2"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} className="mb-4">
          <Popup>{info}</Popup>
        </Marker>
      </MapContainer>
      <ul className="flex gap-3 justify-center flex-wrap w-fit mb-1">
        <li>
          <p>
            <span className="font-extrabold">Titulo: </span>
            {info.title}
          </p>
        </li>
        <li>
          <p>
            <span className="font-extrabold">Magnitud: </span>
            {info.magnitude}
          </p>
        </li>
        <li>
          <p>
            <span className="font-extrabold">Lugar: </span>
            {info.place}
          </p>
        </li>
        <li>
          <p>
            <span className="font-extrabold">Fecha: </span>
            {info.time}
          </p>
        </li>
        <li>
          <p>
            <span className="font-extrabold">Tsunami: </span>
            {info.tsunami ? "Si" : "No"}
          </p>
        </li>
        <li>
          <p>
            <span className="font-extrabold">Tipo de magnitud: </span>
            {info.mag_type}
          </p>
        </li>
        <li>
          <p>
            <span className="font-extrabold">Latitud </span>
            {latitude}
          </p>
        </li>
        <li>
          <p>
            <span className="font-extrabold">Longitud </span>
            {longitude}
          </p>
        </li>
      </ul>
      <a
        href={links}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 rounded bg-blue-950 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Más información
      </a>
      <div className="bg-gray-100 p-6 mt-5">
        <h2 className="text-lg font-bold mb-4">Comentarios</h2>
        <div className="flex flex-col space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {comments.map((comment) => (
              <p key={comment.id} className="text-gray-700">
                {comment.body}
              </p>
            ))}
          </div>
          <form
            className="bg-white p-4 rounded-lg shadow-md"
            onSubmit={handleSubmitComment}
          >
            <h3 className="text-lg font-bold mb-2">Agregar un comentario</h3>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="comment"
              >
                Comentario
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                rows={3}
                placeholder="Ingresa tu comentario"
                value={newComment}
                onChange={handleCommentChange}
              />
            </div>
            <button
              className="bg-cyan-950 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Comentar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Map;
