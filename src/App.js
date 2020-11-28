import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
    </div>
  );
}

export default App;
