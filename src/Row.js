import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "http://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              className="row_poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.original_title}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
