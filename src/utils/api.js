import axios from 'axios';
const baseUrl = 'https://yts.mx/api/v2';
const moviesUrl = '/list_movies.json';
const movieDetailsUrl = '/movie_details.json';

// Passing configuration object to axios
const fetch = async url => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}${url}`,
  };
  try {
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  console.log('API REQ');
};

export const getMovies = async () => {
  return await fetch(moviesUrl);
};

export const getMovieDetails = async () => {
  return await fetch(movieDetailsUrl);
};
