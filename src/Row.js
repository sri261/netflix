import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "http://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className={isLargeRow ? "row_Large" : "row"}>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              className={
                isLargeRow ? "row_poster row_posterLarge" : "row_poster"
              }
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
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
