import axios from 'axios';

const fetchMovieData = axios.create({
  baseURL:
    'https://api.themoviedb.org/3',
});

export default fetchMovieData;