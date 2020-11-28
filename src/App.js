import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import request from "./request";

function App() {
  return (
    <div className="App">
      <h1>Netflix </h1>
      {/* nav bar */}
      <Banner />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow />
      {/*change above Row component to netflix originals */}
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
