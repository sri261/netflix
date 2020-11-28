const API_KEY = "89cdf3b2017ac774f45936d4d773dd2a";

const request = {
  fetchNetflixOriginals: `discover/tv?api_key${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35`,
  fetchComedyMovies: `/movie/{35}?api_key=<<api_key>>&language=en-US`,
};

export default request;
